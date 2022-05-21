import { GetStaticProps, GetStaticPaths } from "next";
import { EditablePage } from "@magnolia/react-editor";

import { Boilerplate } from "../components";
import { locales } from "../constants/app";
import { config } from "../magnolia/magnolia.config";
import { getCurrentLanguage, setURLSearchParams } from "../utils";

const defaultBaseUrl = "http://localhost:8080";
const mgnlAuthorInstance = "/magnoliaAuthor";
const rootNodeName = "/wif";
const pagesApi = defaultBaseUrl + mgnlAuthorInstance + "/.rest/delivery/pages/v1";
const templateAnnotationsApi = defaultBaseUrl + mgnlAuthorInstance + "/.rest/template-annotations/v1";
const pagenavApi = defaultBaseUrl + mgnlAuthorInstance + "/.rest/delivery/pagenav/v1";

interface WifNextPath {
	params: {
		path: any;
	}
	locale: string;
}
interface PathProps {
	page: any;
	templateAnnotations: any;
	pagenav: any;
}

export default function Path(props: PathProps) {
	const { page, templateAnnotations, pagenav } = props;

	return (
		<Boilerplate>
			{page && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
		</Boilerplate>
	);
}

const getMgnlNodePath = (node: Wif.MgnlNode, paths: Array<string>) => {
	let path: any = node["@path"].replace(rootNodeName, "");

	if (path.length) paths.push(path);

	node["@nodes"].forEach((nodeName) => getMgnlNodePath(node[nodeName], paths));
};

export const getStaticPaths: GetStaticPaths = async () => {
	const navResponse = await fetch(pagenavApi + rootNodeName);
	const nav = await navResponse.json();

	const navPaths: string[] = [];
	getMgnlNodePath(nav, navPaths);

	let paths: Array<WifNextPath> = [];
	locales.forEach((locale: string) => {
		paths.push({ params: { path: [] }, locale }); // Root directory
		navPaths.forEach((navPath: string) => {
			const navPathArray = navPath.split("/");
			navPathArray.shift();

			paths.push({ params: { path: navPathArray }, locale });
		});
	});
	console.log(JSON.stringify(paths));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	console.log("context");
	console.log(context);

	// @ts-ignore
	const resolvedUrl = context.preview ? context.previewData?.query?.slug || ""
		: context.params?.path && Array.isArray(context.params?.path)
			? "/" + context.params.path.join("/") : "";

	const currentLanguage = context.preview ?
		getCurrentLanguage(resolvedUrl) :
		context.locale === "default" ? "en" : context.locale;

	// @ts-ignore
	const isPagesApp = context.previewData?.query?.mgnlPreview || null;
	const props = {} as PathProps;

	// @ts-ignore
	global.mgnlInPageEditor = isPagesApp === "false";

	// Find out page path in Magnolia
	let pagePath = context.preview
		? rootNodeName + resolvedUrl.replace(new RegExp(".*" + rootNodeName), "")
		: rootNodeName + resolvedUrl;

	pagePath = pagePath.replace("/" + currentLanguage, "");
	console.log("pagepath");
	console.log(pagePath);

	// Fetching page content
	const pagesRes = await fetch(setURLSearchParams(pagesApi + pagePath, "lang=" + currentLanguage));
	props.page = await pagesRes.json();

	// Fetching page navigation
	const pagenavRes = await fetch(setURLSearchParams(pagenavApi + rootNodeName, "lang=" + currentLanguage));
	props.pagenav = await pagenavRes.json();

	// Fetch template annotations only inside Magnolia WYSIWYG
	if (isPagesApp) {
		const templateAnnotationsRes = await fetch(templateAnnotationsApi + pagePath);

		props.templateAnnotations = await templateAnnotationsRes.json();
	}

	return {
		props,
	};
};

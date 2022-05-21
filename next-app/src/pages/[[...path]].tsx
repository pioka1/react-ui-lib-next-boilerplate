import { GetStaticProps, GetStaticPaths } from "next";
import { EditablePage } from "@magnolia/react-editor";

import { Boilerplate } from "../components";
import { config } from "../magnolia/magnolia.config";
import { languages, getCurrentLanguage, setURLSearchParams } from "../utils";

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

function getStaticPath(node: Wif.MgnlNode, paths: Array<WifNextPath>) {
	let path: any = node["@path"].replace(rootNodeName, "");

	path = path.split("/");

	path.shift();

	// languages.forEach((language: string) => {
	// 	// Param name MUST match filename [[...path]].js
	//
	// });


	node["@nodes"].forEach((nodeName) => getStaticPath(node[nodeName], paths));
}

export const getStaticPaths: GetStaticPaths = async () => {
	let paths: Array<WifNextPath> = [];
	paths.push({ params: { path: [] }, locale: "en" });
	paths.push({ params: { path: [] }, locale: "sv" });

	// const navRes = await fetch(pagenavApi + rootNodeName);
	// const nav = await navRes.json();

	//getStaticPath(nav, paths);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	// @ts-ignore
	const resolvedUrl = context.preview ? context.previewData?.query?.slug || ""
		: context.params?.path && Array.isArray(context.params?.path)
			? "/" + context.params.path.join("/")
			: "";

	const currentLanguage = context.preview ? getCurrentLanguage(resolvedUrl): context.locale === "default" ? "en" : context.locale;
	const isDefaultLanguage = currentLanguage === languages[0];
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

export default function Path(props: PathProps) {
	const { page, templateAnnotations, pagenav } = props;

	return (
		<Boilerplate>
			{page && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
		</Boilerplate>
	);
}

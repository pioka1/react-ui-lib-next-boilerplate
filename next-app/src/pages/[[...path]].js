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

function getStaticPath(node, paths) {
	let path = node["@path"].replace(rootNodeName, "");

	path = path.split("/");

	path.shift();

	languages.forEach((language, i) => {
		let i18nPathname = JSON.parse(JSON.stringify(path));

		if (i !== 0) i18nPathname.unshift(language);

		paths.push({ params: { path: i18nPathname } }); // Param name MUST match filename [[...path]].js
	});

	node["@nodes"].forEach((nodeName) => getStaticPath(node[nodeName], paths));
}

export async function getStaticPaths() {
	let paths = [];

	const navRes = await fetch(pagenavApi + rootNodeName);
	const nav = await navRes.json();

	getStaticPath(nav, paths);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	console.log(context);
	const resolvedUrl = context.preview
		? context.previewData.query.slug
		: context.params.pathname
			? "/" + context.params.pathname.join("/")
			: "";
	console.log(resolvedUrl);
	const currentLanguage = getCurrentLanguage(resolvedUrl);
	const isDefaultLanguage = currentLanguage === languages[0];
	const isPagesApp = context.previewData?.query?.mgnlPreview || null;
	let props = {
		isPagesApp,
		isPagesAppEdit: isPagesApp === "false",
		basename: isDefaultLanguage ? "" : "/" + currentLanguage,
	};

	global.mgnlInPageEditor = props.isPagesAppEdit;

	// Find out page path in Magnolia
	let pagePath = context.preview
		? rootNodeName + resolvedUrl.replace(new RegExp(".*" + rootNodeName), "")
		: rootNodeName + resolvedUrl;

	if (!isDefaultLanguage) {
		pagePath = pagePath.replace("/" + currentLanguage, "");
	}

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
}

export default function Pathname(props) {
	console.log(props);
	const { page, templateAnnotations, pagenav, isPagesAppEdit, basename } = props;

	return (
		<Boilerplate>
			{page && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
		</Boilerplate>
	);
}

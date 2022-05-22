import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPaths } from "next";
import { EditablePage } from "@magnolia/react-editor";

import { Boilerplate } from "../components";
import { locales } from "../constants/app";
import { config } from "../magnolia/magnolia.config";
import { getCurrentLanguage, setURLSearchParams } from "../utils";

const mgnlHost = String(process.env.NEXT_PUBLIC_MGNL_HOST);
const mgnlAuthor = String(process.env.NEXT_PUBLIC_MGNL_AUTHOR);
const mgnlRootNode = String(process.env.NEXT_PUBLIC_MGNL_ROOT);
const mgnlApiPages = mgnlHost + mgnlAuthor + String(process.env.NEXT_PUBLIC_MGNL_API_PAGES);
const mgnlApiPagenav = mgnlHost + mgnlAuthor + String(process.env.NEXT_PUBLIC_MGNL_API_PAGENAV);
const mgnlApiTemplateAnnotations = mgnlHost + mgnlAuthor + String(process.env.NEXT_PUBLIC_MGNL_API_TEMPLATE);

interface WifNextPath {
	params: {
		path: string[];
	}
	locale: string;
}
interface WifPreviewData {
	query: {
		slug: string;
	}
}
interface WifStaticProps {
	page: Wif.MgnlNode;
	pagenav: Wif.MgnlNode;
	templateAnnotations: {
		[node: string]: string;
	};
	currentLanguage: string;
}

export default function Path(props: WifStaticProps) {
  const { page, pagenav, templateAnnotations, currentLanguage } = props;

  return (
    <Boilerplate pagenav={pagenav} currentLanguage={currentLanguage}>
      {page && <EditablePage content={page} config={config} templateAnnotations={templateAnnotations} />}
    </Boilerplate>
  );
}

const getMgnlNodePath = (node: Wif.MgnlNode, paths: Array<string>) => {
  let path: any = node["@path"].replace(mgnlRootNode, "");

  if (path.length) paths.push(path); // Root directory not added here

  node["@nodes"].forEach((nodeName) => getMgnlNodePath(node[nodeName], paths));
};

export const getStaticPaths: GetStaticPaths = async () => {
  const navResponse = await fetch(mgnlApiPagenav + mgnlRootNode);
  const nav = await navResponse.json();

  const navPaths: string[] = [];
  getMgnlNodePath(nav, navPaths);

  let paths: Array<WifNextPath> = [];
  locales.forEach((locale: string) => {
    paths.push({ params: { path: [] }, locale }); // Root directory added here
    navPaths.forEach((navPath: string) => {
      const navPathArray = navPath.split("/");
      navPathArray.shift();

      paths.push({ params: { path: navPathArray }, locale });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<WifStaticProps, ParsedUrlQuery, WifPreviewData> = async (context) => {
  let resolvedUrl, pagePath, currentLanguage;

  if (context.preview && context.previewData) {
    resolvedUrl = context.previewData.query.slug;
    pagePath = mgnlRootNode + resolvedUrl.replace(new RegExp(".*" + mgnlRootNode), "");
    currentLanguage = getCurrentLanguage(resolvedUrl);
  } else {
    if (context.params && Array.isArray(context.params?.path)) {
      resolvedUrl = "/" + context.params.path.join("/");
    } else {
      resolvedUrl = "/";
    }
    pagePath = mgnlRootNode + resolvedUrl;
    currentLanguage = context.locale === "default" ? "en" : String(context.locale);
  }

  global.mgnlInPageEditor = context.preview;

  const pagesRes = await fetch(setURLSearchParams(mgnlApiPages + pagePath, "lang=" + currentLanguage));
  const page = await pagesRes.json();

  const pagenavRes = await fetch(setURLSearchParams(mgnlApiPagenav + mgnlRootNode, "lang=" + currentLanguage));
  const pagenav = await pagenavRes.json();

  let templateAnnotations = null;
  if (context.preview) {
    const templateAnnotationsRes = await fetch(mgnlApiTemplateAnnotations + pagePath);
    templateAnnotations = await templateAnnotationsRes.json();
  }

  return {
    props: {
      page,
      pagenav,
      templateAnnotations,
      currentLanguage
    }
  };
};

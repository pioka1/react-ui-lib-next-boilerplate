import { MGNL_HOST, MGNL_ROOT } from "../constants/app";

export const jcrMultiFieldToArray = (jcrMultifield: Wif.MgnlNode) => {
  return jcrMultifield["@nodes"].map(n => jcrMultifield[n]);
};

export const formatPageLink = (url: string, isPreview: boolean) => {
  if (!isPreview) {
    return url.replace(String(MGNL_ROOT), "");
  }
  return url;
};

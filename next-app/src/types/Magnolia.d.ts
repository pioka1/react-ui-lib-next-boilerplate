namespace Wif {
	export interface MgnlNode {
		"@id": string;
		"@name": string;
		"@nodeType": string;
		"@nodes": string[];
		"@path": string;
		"mgnl:created"?: string;
		"mgnl:lastModified"?: string;
		"mgnl:template"?: string;
		[node: string]: MgnlNode;

		// Page template properties
		title: string;
	}
}
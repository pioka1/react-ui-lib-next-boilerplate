namespace Wif {
	export interface MgnlNode {
		"@path": string;
		"@nodes": string[];
		[node: string]: MgnlNode;
	}
}
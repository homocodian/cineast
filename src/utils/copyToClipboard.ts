async function copyToClipboard(text: string) {
	if (!navigator) {
		throw new Error("Feature not supported!");
	}
	await navigator.clipboard.writeText(text);
}

export default copyToClipboard;

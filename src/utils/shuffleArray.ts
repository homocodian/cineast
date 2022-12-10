function shuffleArray<T>(array: T[]) {
	const copiedArray = [...array];
	for (let i = copiedArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
	}
	return copiedArray;
}

export default shuffleArray;

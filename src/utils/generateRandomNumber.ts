function generateRandomNumber(min: number = 1, max: number = 100) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default generateRandomNumber;

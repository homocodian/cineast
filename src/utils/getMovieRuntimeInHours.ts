function getMovieRuntimeInHours(runtime: number, format: string = "h:min") {
	const hours = Math.floor(runtime / 60);
	const minutes = runtime % 60;
	const formats = format.split(":");
	if (hours <= 0) {
		return `${minutes}${formats[1]}`;
	}
	return `${hours}${formats[0]} ${minutes}${formats[1]}`;
}

export default getMovieRuntimeInHours;

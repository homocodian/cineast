export interface TrendingMovies {
	success: boolean;
	results: TrendingMovieResult[];
}

export interface TrendingMovieResult {
	id: string;
	title: string;
	release: string;
	rating: number;
	poster: string;
	type: Type;
	iswatchlisted: boolean;
	iswatched: boolean;
	isfavorited: boolean;
	isreviewd: boolean;
	rating_by_app: null | string;
}

export enum Type {
	Movie = "movie",
	Tv = "tv",
}

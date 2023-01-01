export interface TvShow {
	success: boolean;
	results: TvShowResult[];
}

export interface TvShowResult {
	id: string;
	title: string;
	release: string;
	rating: number;
	poster: string;
	type: Type;
	iswatchlisted: boolean;
	isfavorited: boolean;
	iswatched: boolean;
	rating_by_app: null | string;
}

export enum Type {
	Tv = "tv",
}

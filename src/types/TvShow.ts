export interface TvShow {
	success: boolean;
	results: TvShowResult[];
}

export interface TvShowResult {
	id: string;
	title: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	release_date: string;
	language: string;
	popularity: number;
	seasons: number;
	episodes: number;
	tagline: string;
	vote_average: number;
	similar_shows: SimilarShows;
	tv_cast: Crew;
	crew: Crew;
	videos: Videos;
	genres: Genres;
	production_countries: ProductionCountries;
	spoken_languages: SpokenLanguages;
	app_rating: number;
	week_num: number;
	images: Images;
	providers: Providers;
	isfavorited: boolean;
	iswatchlisted: boolean;
	iswatched: boolean;
	isreviewd: boolean;
	rating_by_app: string;
	watchedCount: string;
	watched: string[];
}

export interface Crew {
	results: CrewResult[];
}

export interface CrewResult {
	id: number;
	job?: string;
	name: string;
	image: null | string;
	character?: string;
}

export interface Genres {
	results: GenresResult[];
}

export interface GenresResult {
	id: number;
	name: string;
}

export interface Images {
	logos: Backdrop[];
	posters: Backdrop[];
	results: Backdrop[];
	backdrops: Backdrop[];
}

export interface Backdrop {
	file_path: string;
}

export interface ProductionCountries {
	results: ProductionCountriesResult[];
}

export interface ProductionCountriesResult {
	name: string;
	iso_3166_1: string;
}

export interface Providers {
	results: ProvidersResult[];
}

export interface ProvidersResult {
	logo: Logo;
	name: Name;
	type: Type;
	country: string;
	priority: number;
}

export enum Logo {
	T2YyOv40HZeVlLjYsCSPHnWLk4WJpg = "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
}

export enum Name {
	Netflix = "Netflix",
}

export enum Type {
	Stream = "stream",
}

export interface SimilarShows {
	results: SimilarShowsResult[];
}

export interface SimilarShowsResult {
	id: number;
	title: string;
	poster: string;
	rating: number;
}

export interface SpokenLanguages {
	results: SpokenLanguagesResult[];
}

export interface SpokenLanguagesResult {
	name: string;
	iso_639_1: string;
	english_name: string;
}

export interface Videos {
	results: VideosResult[];
}

export interface VideosResult {
	id: string;
	key: string;
	name: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	iso_639_1: string;
	iso_3166_1: string;
	published_at: string;
}

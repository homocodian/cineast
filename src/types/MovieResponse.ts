export interface Movie {
	success: boolean;
	results: MovieResult[];
}

export interface MovieResult {
	id: string;
	title: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	release_date: string;
	popularity: number;
	runtime: number;
	tagline: string;
	vote_average: number;
	similar_movies: SimilarMovies;
	movie_cast: Cast;
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

export interface Cast {
	results: CastResult[];
}

export interface CastResult {
	id: number;
	job?: string;
	name: string;
	image: null | string;
	character?: string;
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
	logo: string;
	name: string;
	type: Type;
	country: string;
	priority: number;
}

export enum Type {
	Buy = "buy",
	Stream = "stream",
}

export interface SimilarMovies {
	results: SimilarMoviesResult[];
}

export interface SimilarMoviesResult {
	id: number;
	title: string;
	poster: string;
	rating: number;
	release_date: string;
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

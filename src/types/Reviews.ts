export interface Reviews {
	success: boolean;
	results: Result[];
}

export interface Result {
	id: string;
	creator_username: string;
	display_name: string;
	avatar_url: string;
	movie: Movie | null;
	critic: boolean;
	media: Media | null;
	likes: number;
	replies: number;
	repling_to: any[];
	mentions: any[];
	body: string;
	isLiked: boolean;
	isReported: boolean;
	thought_on: Movie | null;
	created_at: string;
}

export interface Media {
	data: Datum[];
}

export interface Datum {
	url: string;
	width: number;
	height: number;
}

export interface Movie {
	id: string;
	type: Type;
	title: string;
	poster: string;
	rating?: number;
}

export enum Type {
	Movie = "movie",
	Tv = "tv",
}

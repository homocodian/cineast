export interface User {
	success: boolean;
	results: UserResult;
}

export interface UserResult {
	id: string;
	username: string;
	display_name: string;
	email: string;
	avatar_url: string;
	backdrop_url: string;
	bio: string;
	followers: number;
	following: number;
	reviews: number;
	created: string;
	token_id: string;
	device_id: string;
	genres: any[];
	languages: any[];
	critic: boolean;
	country: null;
	isfollow: boolean;
}

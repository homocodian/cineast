export interface UserLists {
	success: boolean;
	results: Result[];
}

export interface Result {
	id: string;
	creator_username: string;
	display_name: string;
	avatar_url: string;
	movie: null;
	media: null;
	likes: number;
	replies: number;
	repling_to: any[];
	mentions: any[];
	body: string;
	isLiked: boolean;
	isReported: boolean;
	thought_on: null;
	title: string;
	list_id: string;
	list_images: string[];
	count: string;
	critic: boolean;
	created_at: string;
}

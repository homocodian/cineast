export interface ReviewComments {
	success: boolean;
	results: Result[];
}

export interface Result {
	id: string;
	creator_username: string;
	display_name: string;
	avatar_url: string;
	media: null;
	likes: number;
	replies: number;
	repling_to: string[];
	mentions: any[];
	body: string;
	isLiked: boolean;
	isReported: boolean;
	thought_on: null;
	critic: boolean;
	created_at: string;
}

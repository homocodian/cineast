export interface ReviewLikeUnlikeError {
	success: boolean;
	error: string;
	code: string;
	results: ReviewLikeUnlikeErrorResult;
}

export interface ReviewLikeUnlikeErrorResult {
	length: number;
	name: string;
	severity: string;
	code: string;
	detail: string;
	schema: string;
	table: string;
	constraint: string;
	file: string;
	line: string;
	routine: string;
	message: string;
}

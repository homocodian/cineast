export interface FollowUnFollowError {
	success: boolean;
	error: string;
	code: string;
	results: Results;
}

export interface Results {
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

export type FollowUnFollowUserParams = {
	operationType: "follow" | "unfollow";
	userId: string;
	followerId: string;
};

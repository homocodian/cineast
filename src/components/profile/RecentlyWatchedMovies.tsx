import axios from "axios";
import { useQuery } from "react-query";

import { UserWatchedMovie } from "@customTypes/UserWatchedMovies";
import { ClickableMovie } from "..";

const fetchRecentlyWatchedMovies = (username: string, page?: number) =>
	axios.get<UserWatchedMovie>(
		`${
			process.env.NEXT_PUBLIC_BACKEND_URL
		}/v2/movies/user/watched/${username}?username=${username}&page=${page ?? 0}`
	);

function RecentlyWatchedMovies({ userName }: { userName: string }) {
	const { data, isLoading, error } = useQuery(
		"recently-watched",
		() => fetchRecentlyWatchedMovies(userName),
		{ retry: 2, refetchOnWindowFocus: false }
	);

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}

	return (
		<div className="my-4">
			<h2 className="font-semibold">Recently Watched</h2>
			<div className="mt-4 flex flex-wrap gap-3">
				{data?.data.results.map(
					({
						media_id,
						media_poster,
						media_title,
						media_release,
						media_rating,
						user_rating,
					}) => (
						<ClickableMovie
							key={media_id}
							id={media_id}
							poster={media_poster}
							title={media_title}
							release={media_release}
							ImageWidth={120}
							ImageHeight={200}
							className="w-28"
							mediaRating={media_rating}
							userRating={user_rating}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default RecentlyWatchedMovies;

function Loading() {
	return (
		<div className="my-4">
			<h2 className="font-semibold">Recently Watched</h2>
			<div className="my-2">
				<div className="flex flex-wrap gap-4">
					{Array.from(Array(5).keys()).map((index) => (
						<div
							key={index.toString()}
							className="h-32 w-24 animate-pulse rounded-md bg-gray-500"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function Error() {
	return (
		<div className="my-4">
			<h2 className="font-semibold">Recently Watched</h2>
			<div className="my-2">
				<div className="flex flex-wrap gap-4">
					<p className="text-center text-lg font-semibold">
						Failed to get data!
					</p>
				</div>
			</div>
		</div>
	);
}

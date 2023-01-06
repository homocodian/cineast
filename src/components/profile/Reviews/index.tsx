import { Fragment } from "react";

import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { Reviews } from "@customTypes/Reviews";
import ReviewCard from "./ReviewCard";
import CardSkeleton from "@components/CardSkeleton";
import Spinner from "@assets/icons/Spinner";
import { useSession } from "next-auth/react";

const fetchReviews = (
	username: string,
	currentLoggedInUser: string | undefined = undefined,
	page: number = 0
) => {
	return axios.get<Reviews>(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/v2/reviews/user/${username}?username=${currentLoggedInUser}&page=${page}`
	);
};

function Reviews({ userName }: { userName: string }) {
	const { data: session, status } = useSession();
	const {
		data,
		isLoading,
		error,
		isFetching,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	} = useInfiniteQuery(
		["reviews"],
		({ pageParam }) =>
			fetchReviews(userName, session?.user.username, pageParam),
		{
			retry: 2,
			refetchOnWindowFocus: false,
			getNextPageParam: (_lastpage, pages) => {
				if (pages[pages.length - 1].data.results.length >= 20) {
					return pages.length;
				} else {
					return undefined;
				}
			},
			enabled: status === "loading" ? false : true,
			staleTime: Infinity,
		}
	);

	if (isLoading) {
		return <CardSkeleton count={3} />;
	}

	if (error) {
		return (
			<p className="my-4 text-center text-lg font-semibold">No data yet!</p>
		);
	}

	return (
		<Fragment>
			<div className="my-4 divide-y-[0.1px]">
				{data?.pages.map((groups, index) => (
					<Fragment key={index}>
						{groups.data.results.map((review) => (
							<ReviewCard key={review.id} review={review} username={userName} />
						))}
					</Fragment>
				))}
			</div>
			{hasNextPage ? (
				<div className="my-4 grid place-content-center">
					{isFetching || isFetchingNextPage ? (
						<div className="flex items-start justify-center">
							<Spinner className="h-8 w-8 animate-spin fill-twitter-blue text-gray-200 dark:text-gray-600" />
						</div>
					) : (
						<button title="Load more" onClick={() => fetchNextPage()}>
							<PlusCircleIcon className=" h-10 w-10" />
						</button>
					)}
				</div>
			) : null}
		</Fragment>
	);
}

export default Reviews;

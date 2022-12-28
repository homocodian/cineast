import axios from "axios";
import { useQuery } from "react-query";

import CardSkeleton from "@components/CardSkeleton";
import { UserLists } from "@customTypes/UserLists";
import ListCard from "./ListCard";

const fetchUserLists = (username: string, page: number = 0) =>
	axios.get<UserLists>(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/search/lists/user/${username}?username=${username}&page=${page}`
	);

function Lists({ userName }: { userName: string }) {
	const { data, isLoading, isError } = useQuery(
		["lists"],
		() => fetchUserLists(userName),
		{
			retry: 2,
			refetchOnWindowFocus: true,
			keepPreviousData: true,
		}
	);

	if (isLoading) {
		return <CardSkeleton />;
	}

	if (isError || !data?.data.results?.length) {
		return (
			<p className="my-4 text-center text-lg font-semibold">No data yet!</p>
		);
	}

	return (
		<div className="divide-y-[0.1px]">
			{data?.data.results.map((list) => (
				<ListCard key={list.id} list={list} />
			))}
		</div>
	);
}

export default Lists;

import axios from "axios";
import { nanoid } from "nanoid";
import { useQuery } from "react-query";

import { News } from "@customTypes/News";

function NewUpdates() {
	const { data, isLoading, isError } = useQuery<News>("news", getNews);
	return (
		<div>
			<p className="ml-1 text-sm font-semibold">New Updates</p>
			<div className="mt-3 w-72 space-y-2 py-4">
				{isError ? (
					<p>Failed to news</p>
				) : isLoading ? (
					<Skeleton />
				) : (
					<>
						{data?.articles.slice(0, 3).map(({ urlToImage, title }) => (
							<div className="inline-flex gap-2" key={nanoid()}>
								{urlToImage ? (
									/* eslint-disable @next/next/no-img-element */
									<img
										src={urlToImage}
										alt="backdrops"
										height={48}
										width={48}
									/>
								) : (
									<div
										className="h-12 w-12 bg-gray-600"
										title="Image not available"
									>
										<p className="h-12 truncate text-center text-xs">
											Not available
										</p>
									</div>
								)}
								<p className="text-sm font-semibold line-clamp-2">{title}</p>
							</div>
						))}
					</>
				)}
			</div>
			<div className="inline-flex w-full items-center justify-center">
				<button className="text-center text-xs font-semibold text-muted">
					View all ({data?.totalResults ? data.totalResults : null})
				</button>
			</div>
		</div>
	);
}

export default NewUpdates;

function Skeleton() {
	return (
		<>
			<div className="flex gap-2">
				<div className="h-12 w-12 animate-pulse rounded bg-gray-600 transition-all" />
				<div className="w-full space-y-2">
					<div className="h-4 w-full animate-pulse rounded bg-gray-600 transition-all" />
					<div className="h-4 w-4/5 animate-pulse rounded bg-gray-600 transition-all" />
				</div>
			</div>
			<div className="flex gap-2">
				<div className="h-12 w-12 animate-pulse rounded bg-gray-600 transition-all" />
				<div className="w-full space-y-2">
					<div className="h-4 w-full animate-pulse rounded bg-gray-600 transition-all" />
					<div className="h-4 w-4/5 animate-pulse rounded bg-gray-600 transition-all" />
				</div>
			</div>
			<div className="flex gap-2">
				<div className="h-12 w-12 animate-pulse rounded bg-gray-600 transition-all" />
				<div className="w-full space-y-2">
					<div className="h-4 w-full animate-pulse rounded bg-gray-600 transition-all" />
					<div className="h-4 w-4/5 animate-pulse rounded bg-gray-600 transition-all" />
				</div>
			</div>
		</>
	);
}

async function getIpData() {
	try {
		const data = (await axios.get("https://ipinfo.io?token=03e79fb3870b40"))
			.data;
		return data;
	} catch (error) {
		console.warn(
			"Looks like you are using blocker, failed to get country defaut to us for news"
		);
		return null;
	}
}

async function getNews() {
	const ipData = await getIpData();
	if (ipData?.country) {
		return (
			await axios.get<News>(
				`https://saurav.tech/NewsAPI/top-headlines/category/entertainment/${ipData.country.toLowerCase()}.json`
			)
		).data;
	}
	return (
		await axios.get<News>(
			"https://saurav.tech/NewsAPI/top-headlines/category/entertainment/us.json"
		)
	).data;
}

import { GetStaticProps } from "next";

import axios from "axios";

import SideNavbar from "@components/SideNavbar";
import {
	Container,
	// MovieSearchbar,
	Navbar,
	ClickableMovie,
} from "@components/index";
import { baseImageUrl } from "@constants/baseImageUrl";
import { shuffleArray } from "@utils/index";
import { TvShow, TvShowResult } from "@customTypes/TvShows";

interface ITvShows {
	data: TvShow;
	suggested: TvShowResult[];
	topRated: TvShowResult[];
}

function TvShowsPage({ data, suggested, topRated }: ITvShows) {
	return (
		<Container className="mt-5 mb-8 px-4">
			<div className="flex gap-10">
				<aside className="hidden select-none md:block">
					<SideNavbar />
				</aside>
				<div className="flex-grow">
					{/* header */}
					<Navbar />
					{/* main */}
					<div className="mt-6 flex gap-8 md:mt-10">
						<main className="flex-grow">
							{/* <MovieSearchbar /> */}
							<div className="mt-8 flex flex-col gap-6">
								{/* trending */}
								<div>
									<h1 className="text-lg font-semibold md:text-xl">
										Currently Trending
									</h1>
									<div className="my-4 mt-4 grid grid-cols-2 gap-4 xxs:grid-cols-3 md:mt-8 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
										{data.results.map(
											({
												poster,
												title,
												id,
												release,
												rating,
												rating_by_app,
												type,
											}) => (
												<ClickableMovie
													poster={`${baseImageUrl}/w342/${poster}`}
													title={title}
													id={id}
													release={release}
													key={id}
													rating={rating}
													ratingByApp={rating_by_app ? +rating_by_app : null}
													type={type}
												/>
											)
										)}
									</div>
								</div>
								{/* suggested */}
								<div>
									<h1 className="text-lg font-semibold md:text-xl">
										Suggested
									</h1>
									<div className="my-4 mt-4 grid grid-cols-2 gap-4 xxs:grid-cols-3 md:mt-8 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
										{suggested.map(
											({
												poster,
												title,
												id,
												release,
												rating_by_app,
												rating,
												type,
											}) => (
												<ClickableMovie
													poster={`${baseImageUrl}/w342/${poster}`}
													title={title}
													id={id}
													release={release}
													key={id}
													rating={rating}
													ratingByApp={rating_by_app ? +rating_by_app : null}
													type={type}
												/>
											)
										)}
									</div>
								</div>

								{/* Top Rated */}
								<div>
									<h1 className="text-lg font-semibold md:text-xl">
										Top Rated
									</h1>
									<div className="my-4 mt-4 grid grid-cols-2 gap-4 xxs:grid-cols-3 md:mt-8 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
										{topRated.map(
											({
												poster,
												title,
												id,
												release,
												rating_by_app,
												rating,
												type,
											}) => (
												<ClickableMovie
													poster={`${baseImageUrl}/w342/${poster}`}
													type={type}
													title={title}
													id={id}
													release={release}
													key={id}
													rating={rating}
													ratingByApp={rating_by_app ? +rating_by_app : null}
												/>
											)
										)}
									</div>
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default TvShowsPage;

export const getStaticProps: GetStaticProps = async () => {
	const tvShows = await axios.get<TvShow>(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/tv/trending`
	);
	if (tvShows.statusText !== "OK" || !tvShows.data.success) {
		throw new Error(
			`Failed to fetch tv shows, received status ${tvShows.status}`
		);
	}
	const suggested = shuffleArray(tvShows.data.results.slice(0, 10));
	const topRated = shuffleArray(tvShows.data.results.slice(0, 10));
	return {
		props: {
			data: tvShows.data,
			suggested,
			topRated,
		},
		revalidate: 60 * 60,
	};
};

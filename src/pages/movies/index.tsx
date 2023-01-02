import { GetStaticProps } from "next";

import axios from "axios";

import SideNavbar from "@components/SideNavbar";
import {
	Container,
	// MovieSearchbar,
	Navbar,
	ClickableMovie,
} from "@components/index";
import {
	TrendingMovies,
	TrendingMovieResult,
} from "@customTypes/TrendingMovies";
import { baseImageUrl } from "@constants/baseImageUrl";
import { shuffleArray } from "@utils/index";

interface IMovies {
	data: TrendingMovies;
	suggested: TrendingMovieResult[];
	topRated: TrendingMovieResult[];
}

function Movies({ data, suggested, topRated }: IMovies) {
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
													ratingByApp={rating_by_app ? +rating_by_app : 0}
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
													ratingByApp={rating_by_app ? +rating_by_app : 0}
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
													ratingByApp={rating_by_app ? +rating_by_app : 0}
													type={type}
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

export default Movies;

export const getStaticProps: GetStaticProps = async () => {
	const movies = await axios.get<TrendingMovies>(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/search/trending`
	);
	if (movies.statusText !== "OK" || !movies.data.success) {
		throw new Error(`Failed to fetch movies, received status ${movies.status}`);
	}
	const suggested = shuffleArray(movies.data.results.slice(0, 10));
	const topRated = shuffleArray(movies.data.results.slice(0, 10));
	return {
		props: {
			data: movies.data,
			suggested,
			topRated,
		},
		revalidate: 60 * 60,
	};
};

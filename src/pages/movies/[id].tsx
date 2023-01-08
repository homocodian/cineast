import Image from "next/image";
import { GetServerSidePropsContext, NextPage } from "next";

import axios from "axios";
import { HeartIcon } from "@heroicons/react/20/solid";

import { Critics } from "@assets/icons";
import RootLayout from "@components/RootLayout";
import { Movie } from "@customTypes/MovieResponse";
import { baseImageUrl } from "@constants/baseImageUrl";
import { getMovieRuntimeInHours, shimmer, toBase64 } from "@utils/index";
import { ExtraInfo, MovieInfoTab } from "@components/index";

const Movie: NextPage<{ data: Movie }> = ({ data }) => {
	return (
		<RootLayout>
			<main className="flex-grow">
				<div className="relative">
					{/* backdrop poster */}
					<div className="relative h-44 sm:h-52 md:h-72">
						<Image
							src={`${baseImageUrl}/w780/${data.results[0].backdrop_path}`}
							alt={data.results[0].title}
							fill
							placeholder="blur"
							className="rounded object-cover"
							blurDataURL={`data:image/svg+xml;base64,${toBase64(
								shimmer(700, 475)
							)}`}
						/>
					</div>

					<div className="flex">
						{/* poster */}
						<div className="h-[140px] w-[110px] sm:h-[100px] md:w-36">
							<div className="absolute left-2 top-[45%] h-[140px] w-[100px] rounded-xl sm:top-[50%] md:left-4 md:h-52 md:w-36 lg:left-5">
								<Image
									src={`${baseImageUrl}/w154/${data.results[0].poster_path}`}
									alt={data.results[0].title}
									fill
									className="rounded-xl"
									priority
									sizes="33vw"
								/>
							</div>
						</div>

						{/* movie info */}
						<div className="ml-4 mt-3 flex flex-col gap-2 md:mt-5 md:ml-8 lg:ml-10">
							{/* title & release year */}
							<div className="flex flex-col gap-1 xs:flex-row">
								<h1
									title={data.results[0].title}
									className="w-[16ch] truncate text-sm  font-semibold uppercase xxs:w-[20ch] xs:w-auto"
								>
									{data.results[0].title}
								</h1>
								<h2 className="text-sm font-semibold uppercase">
									{`(${data.results[0].release_date.split("-")[0]})`}
								</h2>
							</div>
							<div className="flex gap-6">
								<div className="flex flex-col gap-1">
									{/* genres & runtime */}
									<div className="flex flex-col gap-1 xs:flex-row">
										<p className="w-[16ch] truncate text-sm font-normal xxs:w-[20ch] xs:w-auto">
											{data.results[0]?.genres?.results
												.map(({ name }) => name)
												.join("/ ")}
										</p>
										<span className="text-xs font-normal text-muted xs:self-center">
											{getMovieRuntimeInHours(data.results[0]?.runtime)}
										</span>
									</div>

									{/* available platforms */}
									{data.results[0]?.providers?.results?.length > 0 ? (
										<div className="flex gap-1">
											<span className="text-xs text-muted">Available on</span>
											<div className="ml-2 self-center">
												<Image
													src={`${baseImageUrl}/w45/${data.results[0].providers.results[0].logo}`}
													alt={data.results[0].providers.results[0].logo}
													width={20}
													height={20}
												/>
											</div>
										</div>
									) : null}
								</div>
								{/* votes */}
								<div className="hidden gap-2 sm:flex">
									{/* critics vote */}
									<div className="flex flex-col gap-1">
										<div className="flex gap-2">
											<Critics width={20} height={20} />
											<p className="self-center font-semibold">60%</p>
										</div>
										<p className="text-center text-xs font-semibold text-muted">
											Critics
										</p>
									</div>

									{/* divider */}
									<div className="border border-light-dark" />

									{/* audience vote */}
									<div className="flex flex-col gap-1">
										<div className="flex gap-2">
											<HeartIcon className="h-5 w-5 text-red-500" />
											<p className="self-center font-semibold">{`${
												data.results[0].app_rating
													? Math.floor(data.results[0].app_rating * 10) + "%"
													: "N/A"
											}`}</p>
										</div>
										<p className="text-center text-xs font-semibold text-muted">
											Audience
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<MovieInfoTab show={data.results[0]} />
				<div>
					<p className="text-sm font-semibold capitalize">Reviews & Thoughts</p>
					<div className="mt-2 h-[1.5px] w-full bg-muted" />
					<p className="mt-4 text-[#A3A3A3]">{data.results[0].overview}</p>
				</div>
			</main>
			{/* extras */}
			<ExtraInfo logos={data.results[0]?.images.logos} />
		</RootLayout>
	);
};

export default Movie;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const id = context.query?.id;
	try {
		const res = await axios.get<Movie>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/movies/${id}`
		);
		return {
			props: {
				data: res.data,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
}

import Link from "next/link";
import Image from "next/image";
import { GetServerSidePropsContext, NextPage } from "next";

import axios from "axios";
import { HeartIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Critics } from "@assets/icons";
import { Movie } from "@customTypes/MovieResponse";
import { getMovieRuntimeInHours } from "@utils/index";
import { baseImageUrl } from "@constants/baseImageUrl";
import SideNavbar from "@components/general/SideNavbar";
import { Container, UserImage } from "@components/index";
import Tabs from "@components/movies/Tabs";

const Movie: NextPage<{ data: Movie }> = ({ data }) => {
	return (
		<Container className="mt-5 mb-8 px-4">
			<div className="flex gap-10">
				<aside className="hidden select-none md:block">
					<SideNavbar />
				</aside>
				<div className="flex-grow">
					<header className="mt-1 flex select-none items-center justify-between">
						<div>
							<Link href="/home" className="text-sm font-semibold uppercase">
								Cineast
							</Link>
						</div>
						<div className="flex gap-1 rounded-full border border-muted py-1 px-3 md:gap-3 md:px-4">
							<MagnifyingGlassIcon className="h-5 w-5 self-center text-muted" />
							<input
								type="text"
								className="w-28 bg-transparent outline-none placeholder:text-muted xs:w-full"
								placeholder="Search..."
							/>
						</div>
						<UserImage />
					</header>
					<div className="mt-6 flex gap-4 md:mt-10">
						<main className="flex-grow">
							{data?.success && data?.results?.length > 0 ? (
								<>
									<div className="relative">
										{/* backdrop poster */}
										<div className="relative h-44 sm:h-52 md:h-64">
											<Image
												src={`${baseImageUrl}/w780/${data.results[0].backdrop_path}`}
												alt={data.results[0].title}
												fill
												className="rounded object-cover"
												priority
											/>
										</div>

										<div className="ml-1 flex xs:ml-2 sm:ml-3">
											{/* poster */}
											<div className="h-[140px] w-[100px]">
												<Image
													src={`${baseImageUrl}/w154/${data.results[0].poster_path}`}
													alt={data.results[0].title}
													width={100}
													height={140}
													className="absolute top-[50%] rounded-md xs:top-1/2 md:top-[60%]"
												/>
											</div>

											{/* movie info */}
											<div className="ml-4 mt-3 flex flex-col gap-2">
												{/* title & release year */}
												<div className="flex gap-2">
													<h1
														title={data.results[0].title}
														className="w-[70%] truncate text-sm font-semibold uppercase sm:w-auto"
													>
														{data.results[0].title}
													</h1>
													<h2 className="text-sm font-semibold uppercase">
														{`(${data.results[0].release_date.split("-")[0]})`}
													</h2>
												</div>
												<div className="flex gap-4">
													<div className="flex flex-col gap-2">
														{/* genres & runtime */}
														<div className="flex gap-2">
															<p className="w-[70%] truncate text-sm font-normal md:w-auto">
																{data.results[0]?.genres?.results
																	.map(({ name }) => name)
																	.join("/ ")}
															</p>
															<span className="self-center text-xs font-normal text-muted">
																{getMovieRuntimeInHours(
																	data.results[0]?.runtime
																)}
															</span>
														</div>

														{/* available platforms */}
														{data.results[0]?.providers?.results?.length > 0 ? (
															<div className="flex gap-1">
																<span className="text-xs text-muted">
																	Available on
																</span>
																<div className="ml-2 self-center">
																	<Image
																		src={`${baseImageUrl}/w45/${data.results[0].providers.results[0].logo}`}
																		alt={
																			data.results[0].providers.results[0].logo
																		}
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
																	Math.floor(data.results[0].popularity) ?? 0
																}%`}</p>
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
									<Tabs
										tabs={{
											plot: data.results[0].overview,
											"cast & crew": "Cooming soon...",
											details: "Cooming soon...",
										}}
									/>
									<div>
										<p className="text-sm font-semibold capitalize">
											Reviews & Thoughts
										</p>
										<div className="mt-2 h-[1.5px] w-full bg-muted" />
										<p className="mt-4 text-[#A3A3A3]">
											{data.results[0].overview}
										</p>
									</div>
								</>
							) : (
								<h1 className="mt-16 text-center text-lg capitalize">
									Movie info not found 😑
								</h1>
							)}
						</main>
						{/* extras */}
						<aside className="hidden flex-col lg:flex">
							<div>
								<p className="ml-1 text-sm font-semibold text-muted">
									Activity
								</p>
								<div className="mt-3 w-60 bg-light-dark px-4 py-4">
									<ul className="flex flex-col gap-4 text-xs">
										<li className="cursor-pointer font-semibold tracking-wider">
											Watched
										</li>
										<li className="cursor-pointer font-semibold tracking-wider">
											Currently Watching
										</li>
										<li className="cursor-pointer font-semibold tracking-wider">
											Rank
										</li>
										<div>
											<p className="font-semibold tracking-wide">Media</p>
											<div className="mt-2 flex gap-1 overflow-hidden">
												{data.results[0]?.images?.logos
													.slice(0, 4)
													.map(({ file_path }) => (
														<div key={file_path}>
															<Image
																src={`${baseImageUrl}/w45/${file_path}`}
																alt="logos"
																height={70}
																width={45}
															/>
														</div>
													))}
											</div>
										</div>
									</ul>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Movie;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const id = context.query?.id;
	try {
		const res = await axios.get<Movie>(
			`https://api-cineaste.in/api/v1/movies/${id}`
		);
		return {
			props: {
				data: res.data,
			},
		};
	} catch (error: any) {
		return {
			props: {
				data: {
					success: false,
					results: [],
				},
			},
		};
	}
}

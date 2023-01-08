import { nanoid } from "nanoid";
import { Tab } from "@headlessui/react";
import dayjs from "dayjs";

import CustomImage from "@components/CustomImage";
import { baseImageUrl } from "@constants/baseImageUrl";
import { TvShowResult } from "@customTypes/TvShow";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const tabs = ["plot", "cast & crew", "details"] as const;

type TabsProps = {
	show: TvShowResult;
};

function TvShowInfoTab({ show }: TabsProps) {
	return (
		<div className="w-full px-2 pt-1 pb-6 sm:px-0 md:pt-14">
			<Tab.Group>
				<Tab.List className="flex space-x-8 rounded-xl p-1">
					{tabs.map((tabName) => (
						<Tab
							key={tabName}
							className={({ selected }) =>
								classNames(
									"text-sm font-semibold capitalize leading-5 outline-none focus:outline-none",
									selected ? "text-white" : "text-muted"
								)
							}
						>
							{tabName}
						</Tab>
					))}
				</Tab.List>
				<div className="mt-1 h-px w-full bg-muted" />
				<Tab.Panels className="mt-4">
					<Tab.Panel>
						<p className="font-medium text-muted">{show.overview}</p>
					</Tab.Panel>
					<Tab.Panel>
						<div className="space-y-4">
							{/* cast */}
							<div className="space-y-4">
								<strong className="text-xl">Cast</strong>
								{!show?.tv_cast ? (
									<div className="my-4 inline-flex">
										<p className="font-medium capitalize text-muted">
											No data found!
										</p>
									</div>
								) : (
									<div className="flex flex-grow flex-wrap gap-4 overflow-hidden">
										{show.tv_cast.results.slice(0, 5).map((member) => (
											<div
												key={nanoid()}
												className="w-28 space-y-2 overflow-hidden"
											>
												<div className="relative h-36 w-28 rounded border border-gray-700">
													<CustomImage
														src={`${baseImageUrl}/w154${member.image}`}
														alt={member.name}
														fill
														className="rounded"
														sizes="33vw"
														placeholderImageWidth={112}
														placeholderImageHeight={144}
													/>
												</div>
												<div className="px-1">
													<p>{member.name}</p>
													<p className="text-muted">{member.character}</p>
												</div>
											</div>
										))}
									</div>
								)}
							</div>

							{/* crew */}
							<div className="flex flex-col gap-4">
								<strong className="text-xl">Crew</strong>
								{!show.crew || show.crew.results.length <= 0 ? (
									<div className="my-4 inline-flex">
										<p className="font-medium capitalize text-muted">
											No data found!
										</p>
									</div>
								) : (
									<div className="flex flex-grow flex-wrap gap-4 overflow-hidden">
										{show.crew.results.slice(0, 5).map((member) => (
											<div
												key={nanoid()}
												className="w-28 space-y-2 overflow-hidden"
											>
												<div className="relative h-36 w-28 rounded border border-gray-700">
													<CustomImage
														src={`${baseImageUrl}/w154${member.image}`}
														alt={member.name}
														fill
														className="rounded"
														sizes="33vw"
														placeholderImageWidth={112}
														placeholderImageHeight={144}
													/>
												</div>
												<div className="px-1">
													<p>{member.name}</p>
													<p className="text-muted">{member.job}</p>
												</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className="space-y-6">
							{/* trailers */}
							<div className="space-y-3">
								<strong className="text-xl">Trailer</strong>
								<div className="grid grid-cols-1 gap-4 xxs:grid-cols-2 md:grid-cols-4">
									{show?.videos?.results?.slice(0, 8).map(({ key, name }) => (
										<a
											key={nanoid()}
											href={`https://www.youtube.com/watch?v=${key}`}
											target="_blank"
											className="space-y-2"
											rel="noreferrer"
										>
											<div className="relative aspect-video w-full">
												<CustomImage
													src={`https://img.youtube.com/vi/${key}/sddefault.jpg`}
													alt={name}
													fill
													className="rounded object-cover"
													sizes="33vw"
													placeholderImageWidth={144}
													placeholderImageHeight={112}
												/>
											</div>
											<p className="truncate px-1 text-sm">{name}</p>
										</a>
									))}
								</div>
							</div>

							{/* info */}
							<div className="space-y-2">
								<strong className="text-xl">Info</strong>
								<div className="divide-y">
									<p className="space-x-2 py-2">
										<span className="font-semibold capitalize">
											First air date
										</span>
										<span className="text-gray-300">
											{dayjs(show.release_date).format("MMMM DD,YYYY")}
										</span>
									</p>
									{/* seasons */}
									<p className="space-x-2 py-2">
										<span className="font-semibold capitalize">
											Number of seasons
										</span>
										<span className="text-gray-300">{show.seasons}</span>
									</p>
									{/* episodes */}
									<p className="space-x-2 py-2">
										<span className="font-semibold capitalize">
											Number of episodes
										</span>
										<span className="text-gray-300">{show.episodes}</span>
									</p>
									{/* origin */}
									<p className="space-x-2 py-2">
										<span className="font-semibold capitalize">
											Production Countries
										</span>
										<span className="text-gray-300">
											{show.production_countries?.results
												?.map(({ name }) => name)
												.join(",")}
										</span>
									</p>
									{/* genres */}
									<p className="space-x-2 py-2">
										<span className="font-semibold capitalize">genres</span>
										<span className="text-gray-300">
											{show.genres?.results?.map(({ name }) => name).join(",")}
										</span>
									</p>
									{/* spoken */}
									<p className="space-x-2 py-2">
										<span className="font-semibold capitalize">
											spoken languages
										</span>
										<span className="text-gray-300">
											{show.spoken_languages?.results
												?.map(({ name }) => name)
												.join(",")}
										</span>
									</p>
								</div>
							</div>
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

export default TvShowInfoTab;

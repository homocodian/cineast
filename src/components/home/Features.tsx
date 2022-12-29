import { MdExplore } from "react-icons/md";
import { FaCameraRetro, FaMagic } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";

function Features() {
	return (
		<section id="features" className="py-8 px-4">
			<div className="flex items-center justify-center">
				<div className="md:w-[60%]">
					<p className="text-center text-lg font-semibold uppercase text-cineast-yellow">
						Features
					</p>
					<p className="py-2 text-center text-3xl font-bold !leading-10 md:text-5xl md:!leading-[4rem]">
						Enhancing User Experience With Best Features
					</p>
					<p className="py-2 text-center">
						We are commited to provide the features that allows users to be more
						engaged and expressive.
					</p>
				</div>
			</div>

			<div className="my-8 mx-2 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
				{/* explore */}
				<div className="flex h-auto max-w-sm cursor-default flex-col rounded-md border border-gray-700 bg-dark-card p-8 transition-all duration-[.5s] hover:-translate-y-[5px]">
					<div className="h-full flex-1">
						<div className="inline-flex rounded-lg bg-[#f7f7f7] p-4 shadow">
							<MdExplore className="h-8 w-8 text-[#03045E]" />
						</div>
						<p className="my-5 text-lg font-bold">Explore</p>
						<p>
							See what&apos;s trending with hashtags on the explore page and
							discover new movies..
						</p>
					</div>
				</div>

				{/* multi media */}
				<div className="flex h-auto max-w-sm cursor-default rounded-md border border-gray-700 bg-dark-card p-8 transition-all duration-[.5s] hover:-translate-y-[5px]">
					<div className="h-full flex-1">
						<div className="inline-flex rounded-lg bg-[#f7f7f7] p-4 shadow">
							<FaCameraRetro className="h-8 w-8 text-[#2A9C38]" />
						</div>
						<p className="my-5 text-lg font-bold">Multi-Media</p>
						<p>
							Add pictures and gifs to your thoughts and reviews. video uploads
							coming soon..
						</p>
					</div>
				</div>

				{/* community */}
				<div className="flex h-auto max-w-sm cursor-default rounded-md border border-gray-700 bg-dark-card p-8 transition-all duration-[.5s] hover:-translate-y-[5px]">
					<div className="h-full flex-1">
						<div className="inline-flex rounded-lg bg-[#f7f7f7] p-4 shadow">
							<HiUserGroup className="h-8 w-8 text-[#FA7022]" />
						</div>
						<p className="my-5 text-lg font-bold">Community</p>
						<p>
							Follow your friends and keep up with their day to day life on
							thoughts section.
						</p>
					</div>
				</div>

				{/* top reccomendations */}
				<div className="flex h-auto max-w-sm cursor-default rounded-md border border-gray-700 bg-dark-card p-8 transition-all duration-[.5s] hover:-translate-y-[5px]">
					<div className="h-full flex-1">
						<div className="inline-flex rounded-lg bg-[#f7f7f7] p-4 shadow">
							<StarIcon className="h-8 w-8 text-[#FCAA0E]" />
						</div>
						<p className="my-5 text-lg font-bold">Top Recommendations</p>
						<p>
							Decent alogrithm, We have some interesting ideas to make this a
							one stop recc app.
						</p>
					</div>
				</div>

				{/* critics & audience */}
				<div className="flex h-auto max-w-sm cursor-default rounded-md border border-gray-700 bg-dark-card p-8 transition-all duration-[.5s] hover:-translate-y-[5px]">
					<div className="h-full flex-1">
						<div className="inline-flex rounded-lg bg-[#f7f7f7] p-4 shadow">
							<HeartIcon className="h-8 w-8 text-[#E6010C]" />
						</div>
						<p className="my-5 text-lg font-bold">Critics & Audiences</p>
						<p>
							Make instant decisions by skimming over critics and audiences
							reviews/ratings at one place.
						</p>
					</div>
				</div>

				{/* fastest response time */}
				<div className="flex h-auto max-w-sm cursor-default rounded-md border border-gray-700 bg-dark-card p-8 transition-all duration-[.5s] hover:-translate-y-[5px]">
					<div className="h-full flex-1">
						<div className="inline-flex rounded-lg bg-[#f7f7f7] p-4 shadow">
							<FaMagic className="h-8 w-8 text-[#21BD95]" />
						</div>
						<p className="my-5 text-lg font-bold">Fastest Response Time</p>
						<p>
							We built the app with the latest technology enabling smother ui
							and faster performance.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;

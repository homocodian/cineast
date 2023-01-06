import Image from "next/image";
import Link from "next/link";

import HeroImage from "../../../public/hero.png";
import AvatarImage from "../../../public/avatar.png";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/solid";

function HeroSection() {
	return (
		<section>
			<div className="mx-4 grid grid-cols-1 gap-8 py-16 px-4 md:grid-cols-2">
				{/* hero left */}
				<div className="flex flex-col justify-center space-y-4">
					<h1 className="text-4xl font-semibold lg:text-5xl">
						Social Media Platform for Movie{" "}
						<span className="text-cineast-yellow">Enthusiasts</span>
					</h1>
					<h2 className="text-base font-semibold text-muted lg:text-xl">
						share your thoughts and be a part of cinephile community
					</h2>
					<div className="flex items-center gap-4">
						<Link
							href="/home"
							className="rounded bg-[#1775E1] px-4 py-2 text-xs font-semibold sm:text-sm md:text-base"
						>
							Try for free
						</Link>
						<button className="group flex items-center text-center">
							<h3 className="text-sm font-semibold">Checkout feature</h3>
							<ChevronRightIcon className="h-4 w-4 text-center text-white transition-all group-hover:translate-x-1" />
						</button>
					</div>
				</div>

				{/* hero right */}
				<div className="flex items-center justify-center">
					<div className="relative h-[17rem] w-48 md:h-80 md:w-52">
						<Image
							src={HeroImage}
							alt="hero-image"
							placeholder="blur"
							fill
							sizes="50vh"
						/>
						<div className="absolute right-[-35px] bottom-0">
							<HeartIcon className="h-5 w-5 text-red-600" />
							<span className="text-xs text-muted">1.2M</span>
						</div>
						<div className="absolute left-[-25%] bottom-[-15px] flex gap-1 rounded-full bg-light-dark">
							<Image src={AvatarImage} alt="user" height={32} width={32} />
							<div className="mr-4 flex items-center py-1">
								<span className="text-xs font-semibold">
									Absolutely beautiful.
								</span>
								{"  "}
								<HeartIcon className="h-4 w-4 text-white" />
							</div>
						</div>
						<div className="absolute left-[-25%] bottom-[-40px] flex gap-1 rounded-full bg-light-dark opacity-20">
							<Image src={AvatarImage} alt="user" height={32} width={32} />
							<div className="mr-4 flex items-center py-1">
								<span className="text-xs font-semibold">Materpiece</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;

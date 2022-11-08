import Link from "next/link";

import Searchbar from "./Searchbar";

function Navbar() {
	return (
		<div className="ml-[48px] flex h-16 items-center gap-8 md:ml-0">
			<Searchbar />
			<ul className="flex items-center justify-center gap-4 overflow-hidden text-xs md:text-base">
				<li className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
					<Link href="/movies" className="capitalize">
						Movies
					</Link>
				</li>
				<li className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
					<Link href="/tvshows" className="capitalize">
						Tv Shows
					</Link>
				</li>
				<li className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
					<Link href="/news" className="capitalize">
						News
					</Link>
				</li>
				<li className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
					<Link
						href="streamparties"
						className="overflow-hidden text-ellipsis whitespace-nowrap capitalize"
					>
						Stream Parties
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;

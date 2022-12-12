import { useRef } from "react";
import Link from "next/link";

import { UserMenu } from "@components/index";
import { SearchIcon } from "@assets/icons";

const links = [
	{
		title: "Home",
		href: "/home",
	},
	{
		title: "Explore",
		href: "/explore",
	},
	{
		title: "Movie",
		href: "/movies",
	},
];

function Navbar() {
	const searchInputRef = useRef<HTMLInputElement | null>(null);
	return (
		<div className="navbar flex h-16 items-center justify-between bg-dark-card pl-8 pr-8 text-white">
			<div className="flex items-center justify-center gap-4">
				<Link href="/" className="brand font-playfair text-lg font-semibold">
					Cineast
				</Link>
				<div className="flex items-center justify-center gap-4 text-white">
					{links.map(({ href, title }) => (
						<Link
							href={href}
							key={title}
							className="hidden w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium focus:outline-none md:inline-flex"
						>
							{title}
						</Link>
					))}
				</div>
			</div>
			<div className="flex items-center justify-center gap-4">
				<div className="hidden h-8 w-52 items-center justify-center rounded px-2 py-1 xxs:flex lg:w-64">
					<input
						type="text"
						ref={searchInputRef}
						name="search-movies"
						className="w-4/5 rounded bg-transparent text-sm outline-none placeholder:text-xs focus:outline-none"
						placeholder="Find Movies, Tv Shows"
					/>
					<button
						onClick={() => searchInputRef.current?.focus()}
						className="inline-flex h-10 w-1/5 items-center justify-center border-none focus:outline-none"
					>
						<SearchIcon width={15} height={15} />
					</button>
				</div>
				<UserMenu />
			</div>
		</div>
	);
}

export default Navbar;

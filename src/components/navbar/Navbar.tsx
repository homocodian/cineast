import Link from "next/link";
import { useRouter } from "next/router";

import { useSession } from "next-auth/react";

import { Dropdown, Menu, UserMenu } from "@components/index";
import { SearchIcon } from "@assets/icons";

function Navbar() {
	const { data, status } = useSession();
	const router = useRouter();

	return (
		<div className="navbar flex h-16 items-center justify-between bg-custom-cyan pl-8 pr-8 text-black">
			<div className="flex items-center justify-center gap-4">
				<Link
					href="/"
					legacyBehavior={false}
					className="brand font-playfair text-lg font-medium"
				>
					Cineast
				</Link>
				<div className="flex items-center justify-center gap-4">
					<Link
						href="/home"
						legacyBehavior={false}
						className="hidden w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium text-gray-700 focus:outline-none md:inline-flex"
					>
						Home
					</Link>
					<Dropdown title="Explore" />
					<Dropdown title="Community" />
					<Link
						href="/movies/1"
						legacyBehavior={false}
						className="hidden w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium text-gray-700 focus:outline-none md:inline-flex"
					>
						Movie
					</Link>
				</div>
			</div>
			<div className="flex items-center justify-center gap-4">
				<div className="hidden h-8 w-52 items-center justify-center rounded bg-white px-2 py-1 xxs:flex lg:w-64">
					<input
						type="text"
						name="search-movies"
						className="w-4/5 rounded text-sm outline-none placeholder:text-xs focus:outline-none"
						placeholder="Find Movies, Tv Shows"
					/>
					<button className="inline-flex h-10 w-1/5 items-center justify-center border-none focus:outline-none">
						<SearchIcon width={15} height={15} />
					</button>
				</div>
				{status === "loading" ? (
					<div className="hidden items-center justify-center md:flex">
						<p className="m-auto mb-3 h-6 w-20 animate-pulse bg-gray-200 leading-relaxed" />
					</div>
				) : status === "unauthenticated" ? (
					<>
						<button
							className="hidden border-none outline-none md:inline-block"
							onClick={() => {
								router.push(`/auth/signin?callbackUrl=${router.asPath}`);
							}}
						>
							Log in
						</button>
					</>
				) : data?.user?.image ? (
					<UserMenu />
				) : (
					<div className="m-auto h-8 w-8 " />
				)}
				<Menu />
			</div>
		</div>
	);
}

export default Navbar;

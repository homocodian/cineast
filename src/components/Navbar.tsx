import Link from "next/link";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import UserMenu from "@components/profile/UserMenu";

function Navbar() {
	return (
		<nav className="mt-1 flex select-none items-center justify-between">
			<div>
				<Link
					href="/home"
					className="text-sm font-semibold uppercase sm:text-base"
				>
					Cineast
				</Link>
			</div>
			<div className="flex gap-1 rounded-full border border-muted py-1 px-3 sm:py-2 md:gap-3 md:py-2 md:px-4">
				<MagnifyingGlassIcon className="h-5 w-5 self-center text-muted" />
				<input
					type="text"
					className="w-28 bg-transparent outline-none placeholder:text-muted xs:w-full"
					placeholder="Search..."
				/>
			</div>
			<UserMenu />
		</nav>
	);
}

export default Navbar;

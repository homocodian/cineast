import { useRef } from "react";
import Link from "next/link";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import UserMenu from "@components/profile/UserMenu";

function Navbar() {
	const searchInputRef = useRef<HTMLInputElement | null>(null);
	return (
		<nav className="mt-1 flex select-none items-center justify-between">
			<div>
				<Link href="/" className="text-sm font-semibold uppercase sm:text-base">
					Cineast
				</Link>
			</div>
			<div className="flex gap-1 rounded-full border border-muted py-1 px-3 sm:py-2 md:gap-3 md:py-2 md:px-4">
				<button onClick={() => searchInputRef.current?.focus()}>
					<MagnifyingGlassIcon className="h-5 w-5 self-center text-muted" />
				</button>
				<input
					type="text"
					ref={searchInputRef}
					className="w-28 bg-transparent outline-none placeholder:text-muted xs:w-full"
					placeholder="Search..."
				/>
			</div>
			<UserMenu />
		</nav>
	);
}

export default Navbar;

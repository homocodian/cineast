import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function MovieSearchbar() {
	return (
		<div className="flex cursor-pointer gap-4 rounded-full bg-light-dark px-4">
			<MagnifyingGlassIcon className="h-5 w-5 self-center text-muted" />
			<input
				type="text"
				className="flex-grow bg-transparent py-3 text-sm font-medium outline-none placeholder:text-[#9D9D9D]"
				placeholder="Enter your mood, language,year, anything we will figure it out"
			/>
		</div>
	);
}

export default MovieSearchbar;

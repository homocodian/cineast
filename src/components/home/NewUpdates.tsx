import Image from "next/image";

import backdrop from "../../../public/backdrop.jpg";

function NewUpdates() {
	return (
		<aside className="hidden flex-col lg:flex">
			<div>
				<p className="ml-1 text-sm font-semibold">New Updates</p>
				<div className="mt-3 w-72 space-y-2 py-4">
					<div className="inline-flex gap-2">
						<Image src={backdrop} alt="backdrops" height={48} width={48} />
						<p className="text-sm font-semibold">
							Sorcesse has perfect Response for fake ganster film
						</p>
					</div>
					<div className="inline-flex gap-2">
						<Image src={backdrop} alt="backdrops" height={48} width={48} />
						<p className="text-sm font-semibold">
							She-Hulk's Titania Actor Wants To Join The John Wick Franchise
						</p>
					</div>
					<div className="inline-flex gap-2">
						<Image src={backdrop} alt="backdrops" height={48} width={48} />
						<p className="text-sm font-semibold">
							Blade Being More Like Pre-MCU Marvel Movies Sounds Amazing
						</p>
					</div>
				</div>
				<div className="inline-flex w-full items-center justify-center">
					<button className="text-center text-xs font-semibold text-muted">
						View all
					</button>
				</div>
			</div>
		</aside>
	);
}

export default NewUpdates;

import Image from "next/image";

import RootLayout from "@components/RootLayout";
import { NewUpdates } from "@components/index";

import backdrop from "../../public/backdrop.jpg";

function HomePage() {
	return (
		<RootLayout>
			<main className="flex-grow">
				<div className="flex flex-col gap-20">
					{/* recommendations */}
					<div className="flex flex-col gap-2">
						<h1 className="font-semibold">Recommendations</h1>
						<div className="flex flex-wrap justify-center gap-2 md:justify-start">
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
						</div>
					</div>

					{/* popular */}
					<div className="flex flex-col gap-2">
						<div className="item-center inline-flex justify-between">
							<h2 className="font-semibold">Popular</h2>
							<div className="inline-flex items-center gap-2">
								<button className="bg-dark-card p-1 text-xs font-semibold">
									7d
								</button>
								<button className="bg-dark-card p-1 text-xs font-semibold">
									1m
								</button>
								<button className="bg-dark-card p-1 text-xs font-semibold">
									2y
								</button>
							</div>
						</div>
						<div className="flex flex-wrap justify-center gap-2 md:justify-start">
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
							<Image
								src={backdrop}
								alt="backdrop"
								height={280}
								width={120}
								className="rounded"
							/>
						</div>
					</div>
				</div>
			</main>
			<NewUpdates />
		</RootLayout>
	);
}

export default HomePage;

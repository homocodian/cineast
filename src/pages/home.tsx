import Image from "next/image";

import RootLayout from "@components/RootLayout";
import { Calendar, NewUpdates, Popular } from "@components/index";

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
					<Popular />
				</div>
			</main>

			<aside className="hidden flex-col gap-4 lg:flex">
				<NewUpdates />
				<Calendar />
			</aside>
		</RootLayout>
	);
}

export default HomePage;

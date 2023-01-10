import Image from "next/image";

import RootLayout from "@components/RootLayout";
import { Popular } from "@components/index";

import backdrop from "../../public/backdrop.jpg";
import useMediaQuery from "@hooks/useMediaQuery";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("@components/home/Calendar"));
const NewUpdates = dynamic(() => import("@components/home/NewUpdates"));

function HomePage() {
	const isDesktop = useMediaQuery("(min-width: 1024px)");
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

			{!isDesktop ? null : (
				<aside className="hidden max-w-xs flex-col gap-4 lg:flex">
					<NewUpdates />
					<Calendar />
				</aside>
			)}
		</RootLayout>
	);
}

export default HomePage;

import { useState } from "react";
import Image from "next/image";

import backdrop from "../../../public/backdrop.jpg";

const popularDays = ["7d", "1m", "1y"] as const;

function Popular() {
	const [activePopularDay, setActivePopularDay] = useState(0);
	return (
		<div className="flex flex-col gap-2">
			<div className="item-center inline-flex justify-between">
				<h2 className="font-semibold">Popular</h2>
				<div className="inline-flex items-center gap-2">
					{popularDays.map((day, index) => (
						<button
							className={`${
								index === activePopularDay ? "bg-dark-card" : ""
							} p-1 text-xs font-semibold`}
							onClick={() => setActivePopularDay(index)}
							key={day}
						>
							{day}
						</button>
					))}
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
	);
}

export default Popular;

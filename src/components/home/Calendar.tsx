import Image from "next/image";
import { useRouter } from "next/router";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { baseImageUrl } from "@constants/baseImageUrl";

dayjs.extend(advancedFormat);

const month = dayjs().format("MMM");

function getDaysInMonths() {
	const days: string[] = [];
	let currentDate = dayjs();
	const stopDate = dayjs().startOf("month");
	while (currentDate >= stopDate) {
		days.push(dayjs(currentDate).format("Do"));
		currentDate = dayjs(currentDate).subtract(1, "day");
	}
	return days;
}

const result = {
	id: "119051",
	title: "Wednesday",
	poster_path: "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
	backdrop_path: "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
	release_date: "2022-11-23",
	providers: {
		results: [
			{
				logo: "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
				name: "Netflix",
				type: "stream",
				country: "AD",
				priority: 0,
			},
		],
	},
};

function Calendar() {
	const router = useRouter();

	const updateQuery = (newQuery: string) => {
		router.push({
			pathname: "/home",
			query: { search: encodeURI(newQuery) },
		});
	};

	console.log(router.query);

	return (
		<div className="flex flex-col gap-2">
			<h1 className="text-sm font-semibold">Calendar</h1>
			<div className="flex w-full flex-wrap gap-2 rounded bg-dark-card px-2 py-1">
				{getDaysInMonths().map((day, index) => (
					<button
						className="text-sm font-bold"
						onClick={() => updateQuery(day)}
						key={day}
					>
						<p
							className={`${
								router.query?.search
									? router.query?.search === day
										? "text-white"
										: "text-muted"
									: index === 0
									? "text-white"
									: "text-muted"
							}`}
						>
							{day}
						</p>
						<p className="text-center text-muted">{month}</p>
					</button>
				))}
			</div>

			{/* updates */}
			<div className="mt-2 flex gap-3">
				<Image
					src={`${baseImageUrl}/w154${result.poster_path}`}
					alt={result.title}
					height={48}
					width={48}
					className="rounded"
				/>
				<div className="flex flex-col justify-between py-2">
					<p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
						<span>{result.title}</span>
						<span className="ml-2 text-muted">
							{result.release_date.split("-")[0]}
						</span>
					</p>
					<Image
						src={`${baseImageUrl}/w154${result.providers.results[0].logo}`}
						alt="provider"
						height={24}
						width={24}
					/>
				</div>
			</div>
		</div>
	);
}

export default Calendar;

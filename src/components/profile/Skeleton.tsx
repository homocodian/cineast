function Skeleton() {
	return (
		<div className="flex-grow">
			<div className="relative aspect-video max-h-[300px] w-full animate-pulse rounded-xl bg-gray-600">
				<div className="absolute top-[87%] left-[3%] h-16 w-16 rounded-full border border-white bg-gray-600 md:h-[70px] md:w-[70px] lg:h-24 lg:w-24" />
			</div>
			<div className="mt-20 flex flex-col gap-2">
				<div className="h-6 w-[90%] animate-pulse rounded bg-gray-600" />
				<div className="h-6 w-[70%] animate-pulse rounded bg-gray-600" />
				<div className="h-6 w-[50%] animate-pulse rounded bg-gray-600" />
			</div>
		</div>
	);
}

export default Skeleton;

function CardSkeleton() {
	return (
		<div className="space-y-4">
			<div className="h-32 w-full animate-pulse rounded bg-gray-600" />
			<div className="h-32 w-full animate-pulse rounded bg-gray-600" />
			<div className="h-32 w-full animate-pulse rounded bg-gray-600" />
		</div>
	);
}

export default CardSkeleton;

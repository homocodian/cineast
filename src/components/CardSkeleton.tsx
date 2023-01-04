import { nanoid } from "nanoid";

function CardSkeleton({ count }: { count?: number }) {
	return (
		<div className="space-y-4">
			{!count ? (
				<div className="h-32 w-full animate-pulse rounded bg-gray-600" />
			) : (
				Array.from(Array(count).keys()).map(() => (
					<div
						key={nanoid()}
						className="h-32 w-full animate-pulse rounded bg-gray-600"
					/>
				))
			)}
		</div>
	);
}

export default CardSkeleton;

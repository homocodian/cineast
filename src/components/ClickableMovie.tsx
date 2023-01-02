import Link from "next/link";
import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/solid";

import toBase64 from "@utils/toBase64";
import shimmer from "@utils/shimmer";
import CriticsIcon from "@assets/icons/CriticsIcon";
import { Critics } from "@assets/icons";

interface ClickableMovieProps {
	poster: string;
	title?: string;
	id: string;
	release?: string | null;
	ImageWidth?: number;
	ImageHeight?: number;
	className?: string;
	rating?: number | null;
	ratingByApp?: number | null;
	type: string;
}

function ClickableMovie({
	id,
	poster,
	release,
	title,
	ImageHeight,
	ImageWidth,
	className,
	rating,
	ratingByApp,
	type,
}: ClickableMovieProps) {
	return (
		<Link
			key={id}
			href={type === "tv" ? `/tv-shows/${id}` : `/movies/${id}`}
			className={className}
		>
			<div className="space-y-3">
				<Image
					src={poster}
					alt={title ?? "movie"}
					className="rounded-xl"
					height={ImageHeight ?? 100}
					width={ImageWidth ?? 200}
					placeholder="blur"
					blurDataURL={`data:image/svg+xml;base64,${toBase64(
						shimmer(ImageHeight ?? 100, ImageWidth ?? 200)
					)}`}
				/>
				<div className="space-y-2">
					{/* {!mediaRating && !userRating ? null : (
						<div className="flex items-center justify-between">
							<div className="flex items-center justify-center">
								<CriticsIcon className="h-6 w-5" />
								<span className="text-xs font-semibold">
									{mediaRating ? Math.floor(mediaRating) * 10 + "%" : "N/A"}
								</span>
							</div>

							<div className="flex items-center justify-center">
								<HeartIcon className="h-5 w-6 text-red-500" />
								<span className="text-xs font-semibold">
									{userRating ? Math.floor(userRating) * 10 + "%" : "N/A"}
								</span>
							</div>
						</div>
					)} */}
					<div className="flex items-center justify-between">
						<div className="inline-flex items-center gap-1">
							<Critics width={24} height={20} />
							<span className="text-sm">
								{rating ? Math.floor(rating * 10) + "%" : "N/A"}
							</span>
						</div>
						<div className="inline-flex items-center gap-1">
							<HeartIcon className="h-5 w-5 text-red-600" />
							<span className="text-sm">
								{ratingByApp ? Math.floor(ratingByApp * 10) + "%" : "N/A"}
							</span>
						</div>
					</div>
					{title ? (
						<p
							title={title}
							className="space-x-2 overflow-hidden text-ellipsis whitespace-nowrap"
						>
							<span className="text-sm font-bold">{title}</span>
							{release ? (
								<span className="text-muted">{`${release.split("-")[0]}`}</span>
							) : null}
						</p>
					) : null}
				</div>
			</div>
		</Link>
	);
}

export default ClickableMovie;

import { useState, Fragment, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
	HeartIcon as OutlineHeartIcon,
	StarIcon as OutlineStarIcon,
} from "@heroicons/react/24/outline";
import {
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
	StarIcon,
} from "@heroicons/react/24/solid";
import ReactMarkdown from "react-markdown";
import { useSession } from "next-auth/react";

import ReviewMenu from "./ReviewMenu";
import { Result } from "@customTypes/Reviews";
import { Carousel } from "@components/index";

const CommentsModal = dynamic(() => import("./CommentsModal"));

interface ReviewProps {
	review: Result;
	setIsCommentModalOpen?: Dispatch<SetStateAction<boolean>>;
	preview?: boolean;
}

dayjs.extend(relativeTime);

export default function ReviewCard({ review }: { review: Result }) {
	const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
	return (
		<Fragment>
			<Review review={review} setIsCommentModalOpen={setIsCommentModalOpen} />
			{isCommentModalOpen && (
				<CommentsModal
					id={review.id}
					isOpen={isCommentModalOpen}
					setIsOpen={setIsCommentModalOpen}
					review={review}
				/>
			)}
		</Fragment>
	);
}

export function Review({
	review,
	setIsCommentModalOpen,
	preview = false,
}: ReviewProps) {
	const { data } = useSession();
	return (
		<div className="py-4 px-4">
			{/* header */}
			<div className="flex items-center justify-between">
				<div className="inline-flex items-center gap-4">
					<Image
						src={review.avatar_url}
						alt={review.display_name}
						height={28}
						width={28}
						className="rounded-full"
					/>
					<p className="space-x-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold capitalize">
						<span>{review.display_name}</span>
						<span>{dayjs().to(dayjs(review.created_at))}</span>
					</p>
				</div>
				{!preview && (
					<ReviewMenu
						id={review.id}
						reviewText={review.body}
						session={data}
						creatorUsername={review.creator_username}
					/>
				)}
			</div>

			{/* review */}
			<div className="flex items-center justify-between">
				<div className="space-y-1 px-2 py-1">
					{/* rating */}
					{review.movie?.rating ? (
						<div className="flex gap-1">
							{Array.from(Array(5).keys()).map((num, index) => {
								return index < Math.floor(review?.movie?.rating!) / 2! ? (
									<StarIcon
										key={`star-${num}`}
										className="h-5 w-5 text-yellow-500"
									/>
								) : (
									<OutlineStarIcon key={`star-${num}`} className="h-5 w-5" />
								);
							})}
							<span>{review.movie.rating} / 10</span>
						</div>
					) : null}

					{/* body of review */}
					<div
						className={`font-medium ${
							preview && "overflow-hidden text-ellipsis whitespace-nowrap"
						}}`}
					>
						{!preview ? (
							<ReactMarkdown>{review.body}</ReactMarkdown>
						) : (
							<p>{review.body.substring(0, 100)}...</p>
						)}
					</div>
				</div>

				{/* review poster/image */}
				{review.movie?.id || review.thought_on?.id ? (
					<Image
						src={review?.movie?.poster ?? review?.thought_on?.poster!}
						alt={review?.movie?.title ?? review?.thought_on?.title!}
						height={68}
						width={68}
						className="rounded-lg"
					/>
				) : null}
			</div>

			{/* medias */}
			{!preview &&
				(review.media ? (
					<Carousel className="mb-2 mt-4">
						{review.media.data.map(({ height, url, width }, index) => (
							<Image
								src={url}
								alt="media"
								height={height}
								width={width}
								className="aspect-video w-full rounded-md object-cover"
								key={index}
							/>
						))}
					</Carousel>
				) : null)}

			{!preview && (
				// activities
				<div className="my-3 inline-flex items-center gap-2">
					<button className="inline-flex items-center gap-1">
						{data?.user?.username === review.creator_username &&
						review.isLiked ? (
							<HeartIcon className="h-5 w-6 text-red-500" />
						) : (
							<OutlineHeartIcon className="h-5 w-6" />
						)}
						{review.likes}
					</button>
					<button
						className="inline-flex items-center gap-1"
						onClick={() =>
							setIsCommentModalOpen && setIsCommentModalOpen((prev) => !prev)
						}
					>
						<ChatBubbleOvalLeftEllipsisIcon className={"h-5 w-6 text-white"} />
						{review.replies}
					</button>
				</div>
			)}
		</div>
	);
}

import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactMarkdown from "react-markdown";
import { signIn, useSession } from "next-auth/react";
import {
	HeartIcon as OutlineHeartIcon,
	StarIcon as OutlineStarIcon,
} from "@heroicons/react/24/outline";
import {
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
	StarIcon,
} from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useMutation } from "react-query";

import ReviewMenu from "./ReviewMenu";
import { Carousel } from "@components/index";
import { Result } from "@customTypes/Reviews";
import { ReviewLikeUnlikeError } from "@customTypes/ReviewLikeUnlike";

dayjs.extend(relativeTime);

interface ReviewProps {
	review: Result;
	setIsCommentModalOpen?: Dispatch<SetStateAction<boolean>>;
	preview?: boolean;
}

type LikeUnlikeReviewProps = {
	operationType: "like" | "unlike";
	reviewId: string;
	currentlyLoggedInUsername: string;
};

async function likeUnlikeReview({
	operationType,
	reviewId,
	currentlyLoggedInUsername,
}: LikeUnlikeReviewProps) {
	return (
		await axios.put(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/reviews/${operationType}?id=${reviewId}&username=${currentlyLoggedInUsername}`
		)
	).data;
}

function Review({ review, setIsCommentModalOpen }: ReviewProps) {
	const { data } = useSession();
	const [isLiked, setIsLiked] = useState({
		isliked: review.isLiked,
		likes: review.likes,
	});
	const { mutate } = useMutation<
		{ success: boolean },
		ReviewLikeUnlikeError,
		LikeUnlikeReviewProps
	>(likeUnlikeReview);

	function likeUnlike() {
		if (!data?.user.username) {
			signIn();
			return;
		}
		if (isLiked.isliked) {
			setIsLiked((prev) => ({
				...prev,
				likes: prev.likes - 1,
				isliked: false,
			}));
			mutate(
				{
					operationType: "unlike",
					reviewId: review.id,
					currentlyLoggedInUsername: data.user.username,
				},
				{
					onError: () => {
						toast.error("Failed to unlike!");
						setIsLiked((prev) => ({
							...prev,
							likes: prev.likes + 1,
							isliked: false,
						}));
					},
				}
			);
		} else {
			setIsLiked((prev) => ({ ...prev, likes: prev.likes + 1, isliked: true }));
			mutate(
				{
					operationType: "like",
					reviewId: review.id,
					currentlyLoggedInUsername: data.user.username,
				},
				{
					onError: () => {
						toast.error("Failed to like!");
						setIsLiked((prev) => ({
							...prev,
							likes: prev.likes - 1,
							isliked: false,
						}));
					},
				}
			);
		}
	}

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
				<ReviewMenu
					id={review.id}
					reviewText={review.body}
					session={data}
					creatorUsername={review.creator_username}
				/>
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
					<div className="font-medium">
						<ReactMarkdown>{review.body}</ReactMarkdown>
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
			{review.media ? (
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
			) : null}

			{/* activities */}
			<div className="my-3 inline-flex items-center gap-2">
				<button onClick={likeUnlike} className="inline-flex items-center gap-1">
					{isLiked.isliked ? (
						<HeartIcon className="h-5 w-6 text-red-500" />
					) : (
						<OutlineHeartIcon className="h-5 w-6" />
					)}
					{isLiked.likes}
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
		</div>
	);
}

export default Review;

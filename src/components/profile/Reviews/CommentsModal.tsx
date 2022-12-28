import { Fragment, Dispatch, SetStateAction } from "react";
import Image from "next/image";

import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { Dialog, Transition } from "@headlessui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Review } from "./ReviewCard";
import TextArea from "@components/TextArea";
import { Result } from "@customTypes/Reviews";
import {
	ReviewComments,
	Result as ReviewComment,
} from "@customTypes/ReviewComments";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Spinner from "@assets/icons/Spinner";
import CardSkeleton from "@components/CardSkeleton";
import { useRouter } from "next/router";

dayjs.extend(relativeTime);

interface CommentsModalProps {
	id: string;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	review: Result;
}

const fetchComments = (username: string, id: string, page: number = 0) => {
	return axios.get<ReviewComments>(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/reviews/replies?page=${page}&id=${id}&username=${username}`
	);
};

export default function CommentsModal({
	id,
	isOpen,
	setIsOpen,
	review,
}: CommentsModalProps) {
	const {
		query: { id: queryId },
	} = useRouter();
	const {
		data,
		isLoading,
		isError,
		fetchNextPage,
		isFetching,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery(
		["review-comments", id],
		({ pageParam }) => fetchComments(queryId![0], id, pageParam),
		{
			retry: 2,
			refetchOnWindowFocus: false,
			getNextPageParam: (_lastpage, pages) => {
				if (pages[pages.length - 1].data.results.length >= 20) {
					return pages.length;
				} else {
					return undefined;
				}
			},
			enabled: review.replies > 0,
		}
	);

	function closeModal() {
		setIsOpen(false);
	}

	// function openModal() {
	// 	setIsOpen(true);
	// }

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-light-dark p-6 shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-white"
								>
									Add Reply
								</Dialog.Title>
								<Review review={review} preview={true} />
								{isLoading ? (
									<CardSkeleton />
								) : (
									<div className="max-h-96 divide-y-[0.1px] overflow-auto">
										{data?.pages.map((group, index) => (
											<Fragment key={index}>
												{group.data.results.map((comment) => (
													<Comment key={comment.id} comment={comment} />
												))}
											</Fragment>
										))}
										{hasNextPage ? (
											<div className="my-4 grid place-content-center">
												{isFetching || isFetchingNextPage ? (
													<div className="flex items-start justify-center">
														<Spinner className="h-8 w-8 animate-spin fill-twitter-blue text-gray-200 dark:text-gray-600" />
													</div>
												) : (
													<button
														title="Load more"
														onClick={() => fetchNextPage()}
													>
														<PlusCircleIcon className=" h-10 w-10" />
													</button>
												)}
											</div>
										) : null}
									</div>
								)}
								<TextArea maxLength={600} />

								{/* actions */}
								<div className="flex items-center justify-center">
									<button className="flex gap-2 rounded bg-twitter-blue px-12 py-2 text-center font-medium">
										{false && (
											<Spinner className="h-4 w-4 animate-spin self-center fill-white text-gray-200" />
										)}
										Post
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

function Comment({ comment }: { comment: ReviewComment }) {
	return (
		<div className="p-4">
			{/* header */}
			<div className="flex items-center justify-between">
				<div className="inline-flex items-center gap-4">
					<Image
						src={comment.avatar_url}
						alt={comment.creator_username}
						height={28}
						width={28}
						className="rounded-full"
					/>
					<div>
						<p className="space-x-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold capitalize">
							<span>{comment.display_name}</span>
							<span>{dayjs().to(dayjs(comment.created_at))}</span>
						</p>
						<p className="text-xs font-semibold">
							Replying to{" "}
							{comment.repling_to.map((username) => (
								<a
									href={`/profile/${username}`}
									target="_blank"
									className="text-blue-500"
									rel="noreferrer"
									key={username}
								>
									@{username}
								</a>
							))}
						</p>
					</div>
				</div>
			</div>

			{/* body */}
			<p className="mt-2 text-xs font-medium">{comment.body}</p>
		</div>
	);
}

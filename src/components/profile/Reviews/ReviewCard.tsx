import { useState, Fragment } from "react";
import dynamic from "next/dynamic";

import Review from "./Review";
import { Result } from "@customTypes/Reviews";

const CommentsModal = dynamic(() => import("./CommentsModal"));

function ReviewCard({
	review,
	username,
}: {
	review: Result;
	username: string;
}) {
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
					username={username}
				/>
			)}
		</Fragment>
	);
}

export default ReviewCard;

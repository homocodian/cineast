import Spinner from "@assets/icons/Spinner";
import {
	FollowUnFollowError,
	FollowUnFollowUserParams,
} from "@customTypes/FollowUnFollow";
import { UserResult } from "@customTypes/User";
import axios from "axios";
import { Session } from "next-auth";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import SignIn from "src/pages/auth/signin";

type FollowUnFollowProps = {
	status: "loading" | "authenticated" | "unauthenticated";
	session: Session | null;
	user: UserResult;
};

const followUnFollowUser = async ({
	userId,
	followerId,
	operationType,
}: FollowUnFollowUserParams) =>
	(
		await axios.post<{ success: boolean }>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/${operationType}/one`,
			{
				user_id: userId,
				follower_id: followerId,
			}
		)
	).data;

function FollowUnFollow({ status, user, session }: FollowUnFollowProps) {
	const queryClient = useQueryClient();
	const { mutate, isLoading, isSuccess } = useMutation<
		{ success: boolean },
		FollowUnFollowError,
		FollowUnFollowUserParams
	>(followUnFollowUser, {
		onSuccess: () => {
			queryClient.invalidateQueries("user");
		},
		onError: () => {
			toast.error("Failed to follow/unfollow!");
		},
	});

	function follow() {
		if (status === "unauthenticated") {
			SignIn();
			return;
		}
		mutate({
			operationType: "follow",
			userId: user.username,
			followerId: session?.user.username!,
		});
	}

	function unfollow() {
		if (status === "unauthenticated") {
			SignIn();
			return;
		}
		mutate({
			operationType: "unfollow",
			userId: user.username,
			followerId: session?.user.username!,
		});
	}

	return (
		<div className="inline-flex flex-grow items-center justify-end">
			{status === "loading" ||
			isLoading ||
			queryClient.isFetching("user") > 0 ? (
				<button
					disabled={isLoading}
					className="flex items-start justify-center rounded-lg bg-black px-4 py-1 font-medium transition-all duration-300 xs:py-2 md:px-8"
				>
					<Spinner className="h-5 w-5 animate-spin fill-white text-gray-600" />
				</button>
			) : session?.user.username === user.username ? null : user.isfollow ? (
				<button
					onClick={unfollow}
					disabled={isLoading}
					className="rounded-lg bg-black px-4 py-1 font-medium transition-all duration-300 xs:py-2 md:px-8"
				>
					Unfollow
				</button>
			) : (
				<button
					onClick={follow}
					disabled={isLoading}
					className="rounded-lg bg-black px-4 py-1 font-medium transition-all duration-300 xs:py-2 md:px-8"
				>
					Follow
				</button>
			)}
		</div>
	);
}

export default FollowUnFollow;

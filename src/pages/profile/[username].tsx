import Image from "next/image";

import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { useQuery } from "react-query";
import { User } from "@customTypes/User";
import RootLayout from "@components/RootLayout";
import { ActivityTabs, FollowUnFollow, Skeleton } from "@components/index";

import backdrop from "../../../public/backdrop.jpg";

const getUserData = async (
	username: string,
	currentlyLoggedInUserName?: string
) =>
	(
		await axios.get<User>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/${username}?username=${currentlyLoggedInUserName}`
		)
	).data;

function ProfilePage() {
	const router = useRouter();
	const { data: session, status } = useSession();
	const {
		data: user,
		isLoading,
		isError,
	} = useQuery<User>(
		"user",
		() => getUserData(router.query.username as string, session?.user.username),
		{
			enabled: !router.query.username || status === "loading" ? false : true,
		}
	);

	if (isError) {
		toast.error("Failed to search request user!");
	}

	return (
		<RootLayout>
			{isLoading || status === "loading" ? (
				<Skeleton />
			) : !user || !user.results?.id ? (
				<div className="grid h-[calc(100vh-82px)] flex-grow place-items-center">
					<h1 className="text-2xl font-semibold">No user found 🥲!</h1>
				</div>
			) : (
				<main className="flex-grow">
					{/* backdrop / cover image */}
					<div className="relative aspect-video max-h-[300px] w-full">
						{user.results.backdrop_url ? (
							<Image
								src={user.results.backdrop_url}
								alt={user.results.display_name}
								fill
								className="rounded-xl object-cover"
								sizes="100vw"
							/>
						) : (
							<Image
								src={backdrop}
								alt={user.results.display_name ?? user.results.username}
								fill
								className="rounded-xl object-cover"
								sizes="100vw"
								placeholder="blur"
							/>
						)}
					</div>
					{/* profile image , user name & follow button */}
					<div className="relative flex px-4">
						<div className="w-16 md:w-[70px] lg:w-24">
							<Image
								src={user.results.avatar_url}
								alt={user.results.display_name}
								height={100}
								width={100}
								className="absolute -top-1/3 h-16 w-16 rounded-full border border-white md:h-[70px] md:w-[70px] lg:h-24 lg:w-24"
							/>
						</div>
						<div className="ml-4 py-2 text-xs md:text-sm lg:py-4">
							<p
								title={user.results.display_name}
								className="w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap font-semibold uppercase xxs:w-[18ch] xs:w-[25ch]"
							>
								{user.results.display_name}
							</p>
							<p className="w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap font-medium text-muted xxs:w-[18ch] xs:w-[25ch]">{`@${user.results.username}`}</p>
						</div>
						<FollowUnFollow
							status={status}
							session={session}
							user={user.results}
						/>
					</div>

					{/* more info */}
					<div className="my-6 flex flex-col gap-3 lg:flex-row">
						{/* wrapper */}
						<div className="lg:min-w-[280px] lg:max-w-[280px]">
							{/* followups */}
							<div className="flex items-center gap-3">
								<p className="space-x-1">
									<span className="text-sm">{user.results.followers}</span>
									<span className="text-xs font-medium text-muted">
										Followers
									</span>
								</p>
								<p className="space-x-1">
									<span className="text-sm">{user.results.following}</span>
									<span className="text-xs font-medium text-muted">
										Following
									</span>
								</p>
							</div>

							{/* about */}
							<div className="my-2 space-y-2">
								<p className="text-sm font-semibold uppercase text-muted">
									About
								</p>
								<div className="rounded-lg bg-dark-card px-4 py-3">
									<p className="text-sm">
										{user.results.bio
											? user.results.bio
											: "Hi there!, I'm writing reviews on cineast app"}
									</p>
								</div>
							</div>
						</div>

						{/* activities */}
						<div className="flex-grow">
							<ActivityTabs userName={user.results.username} />
						</div>
					</div>
				</main>
			)}
		</RootLayout>
	);
}

export default ProfilePage;

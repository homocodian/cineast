import { GetServerSideProps } from "next";
import Image from "next/image";

import axios from "axios";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "@api/auth/[...nextauth]";

import { Results as UserData, User } from "@customTypes/User";
import { Navbar, Container, SideNavbar, ActivityTabs } from "@components/index";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface IProfilePageProps {
	user: UserData;
	userName: string;
}

function ProfilePage({ user, userName }: IProfilePageProps) {
	const { data, status } = useSession();

	return (
		<Container className="mt-5 mb-8 px-4">
			<div className="flex gap-10">
				<aside className="hidden select-none md:block">
					<SideNavbar />
				</aside>
				<div className="flex-grow">
					{/* header */}
					<Navbar />
					{/* main */}
					<div className="mt-6 flex gap-8 md:mt-10">
						<main className="flex-grow">
							{/* backdrop / cover image */}
							<div className="relative aspect-video max-h-[300px] w-full">
								<Image
									src={user.backdrop_url}
									alt={user.display_name}
									fill
									className="rounded-xl object-cover"
									sizes="100vw"
								/>
							</div>
							{/* profile image , user name & follow button */}
							<div className="relative flex px-4">
								<div className="w-16 md:w-[70px] lg:w-24">
									<Image
										src={user.avatar_url}
										alt={user.display_name}
										height={100}
										width={100}
										className="absolute -top-1/3 h-16 w-16 rounded-full border border-white md:h-[70px] md:w-[70px] lg:h-24 lg:w-24"
									/>
								</div>
								<div className="ml-4 py-2 text-xs md:text-sm lg:py-4">
									<p
										title={user.display_name}
										className="w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap font-semibold uppercase xxs:w-[18ch] xs:w-[25ch]"
									>
										{user.display_name}
									</p>
									<p className="w-[10ch] overflow-hidden text-ellipsis whitespace-nowrap font-medium text-muted xxs:w-[18ch] xs:w-[25ch]">{`@${user.username}`}</p>
								</div>
								<div className="inline-flex flex-grow items-center justify-end">
									{status === "loading" ? (
										<div className="h-9 w-20 animate-pulse rounded-lg bg-gray-800 px-4 py-1 font-medium xs:py-2 md:w-24 md:px-8" />
									) : (
										<button className="rounded-lg bg-black px-4 py-1 font-medium xs:py-2 md:px-8">
											Follow
										</button>
									)}
								</div>
							</div>

							{/* more info */}
							<div className="my-6 flex flex-col gap-3 lg:flex-row">
								{/* wrapper */}
								<div className="lg:min-w-[280px] lg:max-w-[280px]">
									{/* followups */}
									<div className="flex items-center gap-3">
										<p className="space-x-1">
											<span className="text-sm">{user.followers}</span>
											<span className="text-xs font-medium text-muted">
												Followers
											</span>
										</p>
										<p className="space-x-1">
											<span className="text-sm">{user.following}</span>
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
											<p className="text-sm">{user.bio}</p>
										</div>
									</div>
								</div>

								{/* activities */}
								<div className="flex-grow">
									<ActivityTabs userName={userName} />
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</Container>
	);
}

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const [session, user] = await Promise.all([
		unstable_getServerSession(context.req, context.res, authOptions),
		axios.get<User>(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/${context?.query?.id![0]}`
		),
	]);

	if (!user.data.success || !user.data.results?.id) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			session,
			user: user.data.results,
			userName: context.query.id![0],
		},
	};
};

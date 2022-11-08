import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { signIn, signOut, useSession } from "next-auth/react";
import { Menu as DefaultMenu, Transition } from "@headlessui/react";

import { Dropdown, Menu } from "../";
import { SearchIcon } from "@assets/icons";

function Navbar() {
	const { data, status } = useSession();
	const router = useRouter();

	return (
		<div className="navbar flex h-16 items-center justify-between bg-custom-cyan pl-8 pr-8">
			<div className="flex items-center justify-center gap-4">
				<Link
					href="/"
					legacyBehavior={false}
					className="brand font-playfair text-lg font-medium"
				>
					Cineast
				</Link>
				<div className="flex items-center justify-center gap-4">
					<Link
						href="/home"
						legacyBehavior={false}
						className="hidden w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium text-gray-700 focus:outline-none md:inline-flex"
					>
						Home
					</Link>
					<Dropdown title="Explore" />
					<Dropdown title="Community" />
					<Link
						href="/watch"
						legacyBehavior={false}
						className="hidden w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium text-gray-700 focus:outline-none md:inline-flex"
					>
						Watch
					</Link>
				</div>
			</div>
			<div className="flex items-center justify-center gap-4">
				<div className="hidden h-8 w-52 items-center justify-center rounded bg-white px-2 py-1 xxs:flex lg:w-64">
					<input
						type="text"
						name="search-movies"
						className="w-4/5 rounded text-sm outline-none placeholder:text-xs focus:outline-none"
						placeholder="Find Movies, Tv Shows"
					/>
					<button className="inline-flex h-10 w-1/5 items-center justify-center border-none focus:outline-none">
						<SearchIcon width={15} height={15} />
					</button>
				</div>
				{status === "loading" ? (
					<div className="hidden items-center justify-center md:flex">
						<p className="m-auto mb-3 h-6 w-20 animate-pulse bg-gray-200 leading-relaxed" />
					</div>
				) : status === "unauthenticated" ? (
					<>
						{/* <button className="hidden border-none outline-none md:inline-block">
							Sign up
						</button> */}
						<button
							className="hidden border-none outline-none md:inline-block"
							onClick={() => {
								if (status === "unauthenticated") {
									signIn();
								} else {
									router.push("/auth/signin");
								}
							}}
						>
							Log in
						</button>
					</>
				) : data?.user?.image ? (
					<DefaultMenu
						as="div"
						className="relative hidden text-left  md:inline-block"
					>
						<div>
							<DefaultMenu.Button className="inline-flex w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium text-gray-700 focus:outline-none">
								<Image
									src={data?.user?.image}
									alt={data?.user?.name ?? "Profile"}
									width={28}
									height={28}
									className="rounded-full"
								/>
							</DefaultMenu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<DefaultMenu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="px-1 py-1 ">
									<DefaultMenu.Item>
										{({ active }) => (
											<button
												className={`${
													active ? "bg-custom-cyan" : "text-gray-900"
												} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												onClick={() => signOut()}
											>
												Logout
											</button>
										)}
									</DefaultMenu.Item>
								</div>
							</DefaultMenu.Items>
						</Transition>
					</DefaultMenu>
				) : (
					<div className="m-auto h-8 w-8 " />
				)}
				<Menu />
			</div>
		</div>
	);
}

export default Navbar;

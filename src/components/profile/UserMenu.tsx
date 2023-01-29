import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";

type UserMenuProps = {
	isLoading?: boolean;
};

function UserMenu({ isLoading }: UserMenuProps) {
	const { data, status } = useSession();

	return status === "loading" || isLoading === true ? (
		<div className="h-[28px] w-[28px] animate-pulse rounded-full bg-light-dark sm:h-[32px] sm:w-[32px]" />
	) : status === "unauthenticated" ? (
		<button
			className="border-none text-muted outline-none md:inline-block"
			onClick={() => signIn()}
		>
			Sign in
		</button>
	) : (
		<Menu as="div" className="relative text-left md:inline-block">
			<div className="flex self-center">
				<Menu.Button className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium text-gray-700 focus:outline-none">
					<Image
						src={data?.user?.image as string}
						alt={data?.user?.name ?? "Profile"}
						width={38}
						height={38}
						className="h-[28px] w-[28px] rounded-full object-contain sm:h-[32px] sm:w-[32px]"
					/>
				</Menu.Button>
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
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-dark-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="p-2">
						{status === "authenticated" && (
							<Menu.Item>
								{({ active }) => (
									<Link
										href={`/profile/${data?.user?.username}`}
										className={`${
											active ? "bg-twitter-blue" : ""
										} group flex w-full items-center rounded-md px-4 py-2 text-white`}
									>
										Profile
									</Link>
								)}
							</Menu.Item>
						)}
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-twitter-blue" : ""
									} group flex w-full items-center rounded-md px-4 py-2 text-white`}
									onClick={() => signOut({ redirect: false })}
								>
									Logout
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export default UserMenu;

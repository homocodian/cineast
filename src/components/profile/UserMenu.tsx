import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { links } from "@components/general/SideNavbar";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function UserMenu() {
	const { data, status } = useSession();

	return status === "loading" ? (
		<div className="h-10 w-10 animate-pulse rounded-full bg-light-dark" />
	) : status === "unauthenticated" ? (
		<button
			className="border-none outline-none md:inline-block"
			onClick={() => signIn()}
		>
			Log in
		</button>
	) : (
		<Menu as="div" className="relative text-left md:inline-block">
			<div>
				<Menu.Button className="inline-flex w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium text-gray-700 focus:outline-none">
					<Image
						src={data?.user?.image as string}
						alt={data?.user?.name ?? "Profile"}
						width={38}
						height={38}
						className="h-[24px] w-[24px] rounded-full sm:h-[38px] sm:w-[38px] "
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
						{links.map(({ title, href }) => (
							<Menu.Item key={title}>
								{({ active }) => (
									<Link
										href={href}
										className={classNames(
											active ? "bg-gray-100 text-gray-900" : "text-white",
											"group flex w-full items-center rounded-md px-4 py-2 text-sm capitalize"
										)}
									>
										{title}
									</Link>
								)}
							</Menu.Item>
						))}
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-gray-100 text-gray-900" : "text-white"
									} group flex w-full items-center rounded-md px-4 py-2 text-sm`}
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

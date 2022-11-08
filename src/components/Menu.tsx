import { Fragment } from "react";
import Link from "next/link";

import { Menu as DefaultMenu, Transition } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/20/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Menu() {
	const { data, status } = useSession();

	return (
		<DefaultMenu as="div" className="relative text-left md:hidden">
			<div>
				<DefaultMenu.Button className="inline-flex w-full justify-center px-1 py-2 text-sm font-medium">
					<Bars4Icon className="h-6 w-6" />
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
				<DefaultMenu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{status === "authenticated" && data?.user?.image ? (
							<DefaultMenu.Item>
								{({ active }) => (
									<Link
										href="/home"
										legacyBehavior={false}
										className={classNames(
											active ? "bg-gray-100 text-gray-900" : "text-gray-700",
											"block px-4 py-2 text-sm"
										)}
									>
										<div className="flex items-center gap-3">
											<Image
												src={data?.user?.image!}
												alt={data?.user?.name ?? "Profile"}
												width={24}
												height={24}
												className="rounded-full"
											/>
											<span>{data.user?.name ?? "Profile"}</span>
										</div>
									</Link>
								)}
							</DefaultMenu.Item>
						) : null}
						<DefaultMenu.Item>
							{({ active }) => (
								<Link
									href="/home"
									legacyBehavior={false}
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block px-4 py-2 text-sm"
									)}
								>
									Home
								</Link>
							)}
						</DefaultMenu.Item>
						<DefaultMenu.Item>
							{({ active }) => (
								<Link
									href="/explore"
									legacyBehavior={false}
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block px-4 py-2 text-sm"
									)}
								>
									Explore
								</Link>
							)}
						</DefaultMenu.Item>
						<DefaultMenu.Item>
							{({ active }) => (
								<Link
									href="/community"
									legacyBehavior={false}
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block px-4 py-2 text-sm"
									)}
								>
									Community
								</Link>
							)}
						</DefaultMenu.Item>
						{status === "unauthenticated" ? (
							<DefaultMenu.Item>
								{({ active }) => (
									<button
										type="submit"
										className={classNames(
											active ? "bg-gray-100 text-gray-900" : "text-gray-700",
											"block w-full px-4 py-2 text-left text-sm"
										)}
										onClick={() => signIn()}
									>
										Log in
									</button>
								)}
							</DefaultMenu.Item>
						) : (
							<DefaultMenu.Item>
								{({ active }) => (
									<button
										type="submit"
										className={classNames(
											active ? "bg-gray-100 text-gray-900" : "text-gray-700",
											"block w-full px-4 py-2 text-left text-sm"
										)}
										onClick={() => signOut()}
									>
										Logout
									</button>
								)}
							</DefaultMenu.Item>
						)}
					</div>
				</DefaultMenu.Items>
			</Transition>
		</DefaultMenu>
	);
}

import { Fragment } from "react";
import Link from "next/link";

import { Menu as DefaultMenu, Transition } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/20/solid";

import { Links } from "./Navbar";

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

type MenuProps = {
	className?: string;
};

export default function Menu({ className }: MenuProps) {
	return (
		<DefaultMenu
			as="div"
			className={classNames("relative text-left lg:hidden", className)}
		>
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
				<DefaultMenu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-dark-card text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<DefaultMenu.Item>
							{() => (
								<Link
									href="/"
									className={classNames("block px-4 py-2 capitalize md:hidden")}
								>
									Cineast
								</Link>
							)}
						</DefaultMenu.Item>
						{Links.map(({ title, href }) => (
							<DefaultMenu.Item key={title}>
								{() => (
									<Link
										href={href}
										className={classNames("block px-4 py-2 capitalize")}
									>
										{title}
									</Link>
								)}
							</DefaultMenu.Item>
						))}
					</div>
				</DefaultMenu.Items>
			</Transition>
		</DefaultMenu>
	);
}

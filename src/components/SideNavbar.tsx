import Link from "next/link";
import { useRouter } from "next/router";

import { Disclosure } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/20/solid";

import {
	HomeIcon,
	ChartIcon,
	DocumentIcon,
	PlayIcon,
	UsersIcon,
} from "../assets/icons";

import { LinkIconProps } from "@customTypes/Links";

const links: LinkIconProps[] = [
	{
		title: "home",
		href: "/home",
		icon: <HomeIcon height={15} width={15} fill="#fff" />,
	},
	{
		title: "reels",
		href: "/reels",
		icon: <PlayIcon height={15} width={15} />,
	},
	{
		title: "lists",
		href: "/lists",
		icon: <DocumentIcon height={15} width={15} />,
	},
	{
		title: "community",
		href: "/community",
		icon: <UsersIcon height={15} width={15} />,
	},
	{
		title: "recommendations",
		href: "/recommendations",
		icon: <ChartIcon height={15} width={15} />,
	},
];

function SideNavbar() {
	const router = useRouter();

	return (
		<div>
			<Disclosure as="nav">
				<Disclosure.Button className="peer absolute top-4 left-4 z-10 inline-flex items-center justify-center rounded-md p-2">
					<Bars4Icon className="block h-6 w-6 md:hidden" />
				</Disclosure.Button>
				<div className="peer-transition fixed top-0 -left-full z-40 h-screen w-1/2 border-r bg-light-dark  p-6 delay-150 duration-200 ease-out peer-focus:left-0 md:left-0 md:w-60">
					<Link
						href="/"
						className="font-playfair flex items-center justify-center py-4 text-xl font-semibold capitalize"
					>
						cineast
					</Link>
					<div className="mt-4 flex flex-col">
						{links.map(({ title, icon, href }) => (
							<Link
								href={href}
								key={title}
								className="inline-flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-2 py-2 hover:bg-dark-card"
							>
								{icon}
								<span
									className={`text-sm capitalize ${
										router.pathname == href ? "font-semibold" : ""
									}`}
								>
									{title}
								</span>
							</Link>
						))}
						{/* post */}
						<div className="mt-8 inline-flex w-full items-center justify-center">
							<button className="rounded-full bg-black px-10 py-2 capitalize text-white">
								Post
							</button>
						</div>
					</div>
				</div>
			</Disclosure>
		</div>
	);
}

export default SideNavbar;

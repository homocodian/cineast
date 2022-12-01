import { ReactNode } from "react";
import Link from "next/link";

import {
	HomeIcon,
	BellIcon,
	Squares2X2Icon,
	PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { MdOutlineExplore } from "react-icons/md";

interface LinkIconProps {
	title: string;
	href: string;
	icon: ReactNode;
}

const links: LinkIconProps[] = [
	{
		title: "Home",
		href: "/home",
		icon: <HomeIcon className="h-5 w-5 text-white peer-hover:text-black" />,
	},
	{
		title: "Explore",
		href: "/explore",
		icon: (
			<MdOutlineExplore className="h-5 w-5 text-white peer-hover:text-black" />
		),
	},
	{
		title: "Notifications",
		href: "/notifications",
		icon: <BellIcon className="h-5 w-5 text-white peer-hover:text-black" />,
	},
	{
		title: "Catagory",
		href: "/category",
		icon: (
			<Squares2X2Icon className="h-5 w-5 text-white peer-hover:text-black" />
		),
	},
];

function SideNavbar() {
	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col gap-2">
				{links.map(({ title, href, icon }) => (
					<IconLink key={title} title={title} href={href} icon={icon} />
				))}
				<div className="h-px w-full bg-[#7F7F7F]" />
				<IconLink
					title="Create Post"
					href="/create-post"
					icon={
						<PencilSquareIcon className="h-5 w-5 text-white peer-hover:text-black" />
					}
				/>
			</div>
		</div>
	);
}

export default SideNavbar;

function IconLink({ href, icon, title }: LinkIconProps) {
	return (
		<Link href={href}>
			<div
				title={title}
				className="peer inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-light-dark"
			>
				{icon}
			</div>
		</Link>
	);
}

import { useState } from "react";
import Link from "next/link";

import {
	HomeIcon,
	BellIcon,
	PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { MdOutlineExplore } from "react-icons/md";

import { LinkIconProps } from "@customTypes/Links";
import { WritePost } from "@components/index";

export const links: LinkIconProps[] = [
	{
		title: "Home",
		href: "/",
		icon: (
			<HomeIcon className="h-5 w-5 text-white peer-hover:text-black lg:h-6 lg:w-6" />
		),
	},
	{
		title: "Explore",
		href: "/explore",
		icon: (
			<MdOutlineExplore className="h-5 w-5 text-white peer-hover:text-black lg:h-6 lg:w-6" />
		),
	},
	{
		title: "Notifications",
		href: "/notifications",
		icon: (
			<BellIcon className="h-5 w-5 text-white peer-hover:text-black lg:h-6 lg:w-6" />
		),
	},
	// {
	// 	title: "Catagory",
	// 	href: "/category",
	// 	icon: (
	// 		<Squares2X2Icon className="h-5 w-5 text-white peer-hover:text-black lg:h-6 lg:w-6" />
	// 	),
	// },
];

function SideNavbar() {
	const [isWritePostModalOpen, setIsWritePostModalOpen] = useState(false);

	const openWritePostModal = () => setIsWritePostModalOpen(true);
	const closeWritePostModal = () => setIsWritePostModalOpen(false);

	return (
		<>
			<div className="flex h-screen items-center justify-center">
				<div className="flex flex-col gap-3">
					{links.map(({ title, href, icon }) => (
						<IconLink key={title} title={title} href={href} icon={icon} />
					))}
					<div className="h-px w-full bg-[#7F7F7F]" />
					<button onClick={openWritePostModal}>
						<div
							title="Write review/thoughts"
							className="peer inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-light-dark"
						>
							<PencilSquareIcon className="h-5 w-5 text-white peer-hover:text-black lg:h-6 lg:w-6" />
						</div>
					</button>
				</div>
			</div>
			<WritePost
				isOpen={isWritePostModalOpen}
				closeModal={closeWritePostModal}
			/>
		</>
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

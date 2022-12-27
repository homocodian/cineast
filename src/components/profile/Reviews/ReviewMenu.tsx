import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import {
	EllipsisVerticalIcon,
	TrashIcon,
	DocumentDuplicateIcon,
	PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { Session } from "next-auth";

import copyToClipboard from "@utils/copyToClipboard";

interface ReviewMenuProps {
	id: string;
	reviewText: string;
	session: Session | null;
	creatorUsername: string;
}

export default function ReviewMenu({
	id,
	reviewText,
	session,
	creatorUsername,
}: ReviewMenuProps) {
	return (
		<Menu as="div" className="relative text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center px-1 py-2 text-sm font-medium">
					<EllipsisVerticalIcon className="h-6 w-6" />
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
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-dark-card shadow-lg focus:outline-none">
					<div className="px-1 py-1 ">
						{creatorUsername === session?.user.username ? (
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? "bg-twitter-blue text-white" : "text-white"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
									>
										<PencilSquareIcon
											className="mr-2 h-5 w-5"
											aria-hidden="true"
										/>
										Edit
									</button>
								)}
							</Menu.Item>
						) : null}

						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-twitter-blue text-white" : "text-white"
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
									onClick={() => {
										reviewText &&
											copyToClipboard(reviewText)
												.then(() => {
													toast("Copied!");
												})
												.catch(() => {
													toast("failed to copy!");
												});
									}}
								>
									<DocumentDuplicateIcon
										className="mr-2 h-5 w-5"
										aria-hidden="true"
									/>
									Copy
								</button>
							)}
						</Menu.Item>
					</div>
					{creatorUsername === session?.user.username ? (
						<div className="px-1 py-1">
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											active ? "bg-red-400 text-white" : "text-white"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
									>
										<TrashIcon
											className="mr-2 h-5 w-5 text-white"
											aria-hidden="true"
										/>
										Delete
									</button>
								)}
							</Menu.Item>
						</div>
					) : null}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

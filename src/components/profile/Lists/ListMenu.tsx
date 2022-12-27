import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import {
	EllipsisVerticalIcon,
	TrashIcon,
	DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

import copyToClipboard from "@utils/copyToClipboard";

interface ListMenuProps {
	id: string;
	text: string;
}

export default function ListMenu({ id, text }: ListMenuProps) {
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
					<div className="p-1">
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-twitter-blue text-white" : "text-white"
									} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
									onClick={() => {
										text &&
											copyToClipboard(text)
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
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

import { Fragment } from "react";

import { nanoid } from "nanoid";

import { Dialog, Transition } from "@headlessui/react";
import { News } from "@customTypes/News";
import { XMarkIcon } from "@heroicons/react/24/solid";

type NewsModalProps = {
	NewsArticles?: News["articles"];
	isOpen: boolean;
	closeModal: () => void;
};

export default function NewsModal({
	NewsArticles,
	isOpen,
	closeModal,
}: NewsModalProps) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-dark-card p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="div"
									className="flex items-center justify-between"
								>
									<h3 className="text-lg font-medium leading-6">
										News Updates
									</h3>
									<button
										onClick={closeModal}
										className="rounded-full p-2 hover:bg-gray-400"
									>
										<XMarkIcon className="h-5 w-5 text-white" />
									</button>
								</Dialog.Title>
								<div className="my-4 max-h-96 divide-y overflow-y-auto">
									{NewsArticles?.map(
										(
											{
												urlToImage,
												title,
												url,
												author,
												description,
												publishedAt,
												source,
											},
											index
										) => (
											<div
												key={nanoid()}
												className="flex flex-col gap-4 py-4 px-2"
											>
												<div className="flex gap-3">
													{urlToImage ? (
														/* eslint-disable @next/next/no-img-element */
														<img
															src={urlToImage}
															alt="news image"
															className="aspect-video w-48"
														/>
													) : (
														<div
															className="flex aspect-video w-48 items-center justify-center bg-gray-600"
															title="Image not available"
														>
															<p className="h-12 truncate text-center text-xs">
																Not available
															</p>
														</div>
													)}
													<div>
														<a
															href={url}
															target="_blank"
															rel="noreferrer"
															className="text-g font-semibold"
														>
															{title}
														</a>
														<p className="mt-2 text-end text-muted">
															Source {source.name}, Author {author} Published at{" "}
															{new Date(publishedAt).toLocaleDateString()}
														</p>
													</div>
												</div>
												<p className="text-lg font-medium text-gray-300">
													{description}
													<a
														role="button"
														href={url}
														target="_blank"
														rel="noreferrer"
														className="ml-4 text-base text-blue-600"
													>
														...read more
													</a>
												</p>
											</div>
										)
									)}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

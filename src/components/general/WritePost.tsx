import { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { baseImageUrl } from "@constants/baseImageUrl";
import dayjs from "dayjs";
import TextArea from "@components/TextArea";

type CreatePostProps = {
	isOpen: boolean;
	closeModal: () => void;
};

function CreatePost({ closeModal, isOpen }: CreatePostProps) {
	const [postFor, setPostFor] = useState<"review" | "thought">("review");

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
							<Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded border border-[#534d4d] bg-dark-card py-6 px-12 text-left align-middle shadow-xl transition-all">
								<div className="flex items-center justify-between">
									<button
										onClick={closeModal}
										className="inline-flex items-center gap-1"
									>
										<ChevronLeftIcon className="h-4 w-4 text-white" />
										<span>Back</span>
									</button>
									<button
										onClick={closeModal}
										className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-600"
									>
										<XMarkIcon className="h-4 w-4 text-white" />
									</button>
								</div>

								<div className="flex gap-8 py-4">
									<div className="m-auto">
										<Image
											src={`${baseImageUrl}/w154/9PFonBhy4cQy7Jz20NpMygczOkv.jpg`}
											alt="movie"
											width={75}
											height={100}
											className="rounded-sm"
										/>
										<p className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm">
											Wednesday
										</p>
										<p className="text-center text-muted">2022</p>
									</div>
									<div className="flex flex-grow flex-col gap-2">
										<div className="flex items-center gap-8">
											{/* watched */}
											<div className="inline-flex gap-2">
												<input
													type="checkbox"
													id="watched"
													name="watched"
													value="watched"
												/>
												<label htmlFor="watched" className="select-none">
													Watched on{" "}
													<span className="text-muted">
														{dayjs().format("DD/MM/YYYY")}
													</span>
												</label>
											</div>

											{/* add to fav */}
											<div className="inline-flex gap-2">
												<input
													type="checkbox"
													id="fav"
													name="favorite"
													value="fav"
												/>
												<label htmlFor="fav" className="select-none">
													Add to favorites
												</label>
											</div>
										</div>

										<div className="mt-1">
											{/* review  */}
											<div className="inline-flex gap-4">
												{(["review", "thought"] as const).map((postType) => (
													<button
														className={`capitalize ${
															postType === postFor
																? "border-b-2 border-[#1775E1]"
																: ""
														}`}
														key={postType}
														onClick={() => setPostFor(postType)}
													>
														{postType}
													</button>
												))}
											</div>
											{/* text area  */}
											<TextArea className="mt-3" maxLength={600} row={4} />
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

export default CreatePost;

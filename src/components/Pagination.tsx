import { useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export type OnPageChange = (
	eventName: "next" | "previous",
	currentPage: number,
	nextPage: number
) => void;

interface PaginationProps {
	total: number;
	itemPerPage: number;
	onPageChange?: OnPageChange;
}

export default function Pagination({ total, itemPerPage }: PaginationProps) {
	const [num, setNum] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	const pages = [
		{ page: num },
		{ page: num + 1 },
		{ page: num + 2 },
		{ page: num + 3 },
	];

	function next() {
		setNum(num + 1);
	}

	function back() {
		num > 1 && setNum(num - 1);
	}

	return (
		<div className="flex items-center justify-between px-4 py-3 sm:px-6">
			<div className="flex flex-1 justify-between sm:hidden">
				<button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
					Previous
				</button>
				<button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
					Next
				</button>
			</div>
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-white">
						Showing{" "}
						<span className="font-medium">
							{itemPerPage * currentPage - itemPerPage + 1}
						</span>{" "}
						to <span className="font-medium">{itemPerPage * currentPage}</span>{" "}
						of <span className="font-medium">{total}</span> results
					</p>
				</div>
				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						<button
							className={`relative inline-flex items-center rounded-l-md border border-gray-600 bg-gray-800 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:bg-gray-700`}
							onClick={back}
							disabled={num === 1 ? true : false}
						>
							<span className="sr-only">Previous</span>
							<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
						</button>
						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
						{pages.map(({ page }) => (
							<button
								className={`relative inline-flex items-center border border-gray-600 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 ${
									currentPage === page ? "bg-gray-50" : "bg-gray-800"
								}`}
								onClick={() => setCurrentPage(page)}
								key={page}
							>
								{page}
							</button>
						))}
						<button
							className="relative inline-flex items-center rounded-r-md border border-gray-600 bg-gray-800 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
							onClick={next}
						>
							<span className="sr-only">Next</span>
							<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
}

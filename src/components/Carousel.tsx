import { CSSProperties, ReactNode, useRef } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import { usePosition } from "../hooks/usePosition";

interface IProps {
	children: ReactNode;
	className?: string;
	buttonStyle?: CSSProperties;
	buttonClassName?: string;
}

function Corousel({
	children,
	className: containerClass,
	buttonStyle,
	buttonClassName,
}: IProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { hasItemsOnLeft, hasItemsOnRight, scrollLeft, scrollRight } =
		usePosition(ref);

	return (
		<div
			className="relative"
			data-bs-ride="carousel"
			role="region"
			aria-label="carousel"
		>
			<div
				ref={ref}
				className={`relative flex w-full flex-row items-stretch 
        gap-4 overflow-x-auto scrollbar-hide last:mr-4 ${containerClass}`}
			>
				{children}
			</div>
			<div
				className="absolute top-0 bottom-0 left-1 flex items-center
        justify-center border-0 p-4 text-center 
        hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
				style={{
					visibility: `${hasItemsOnLeft ? "visible" : "hidden"}`,
				}}
				data-bs-target="#carouselControls"
				data-bs-slide="prev"
				aria-label="previous slide"
			>
				<span
					className={`visually-hidden rounded-full bg-white p-1 text-center shadow ${buttonClassName}`}
					role="button"
					onClick={scrollLeft}
					style={buttonStyle}
				>
					<ChevronLeftIcon className="h-5 w-5 text-black" />
				</span>
			</div>
			<div
				className="absolute top-0 bottom-0 
        right-1 flex items-center justify-center border-0
        p-4 text-center hover:no-underline 
        hover:outline-none focus:no-underline focus:outline-none"
				data-bs-target="#carouselControls"
				data-bs-slide="next"
				aria-label="next slide"
				style={{
					visibility: `${hasItemsOnRight ? "visible" : "hidden"}`,
				}}
			>
				<span
					className={`rounded-full bg-white p-1 text-center shadow ${buttonClassName}`}
					role="button"
					onClick={scrollRight}
					style={buttonStyle}
				>
					<ChevronRightIcon className="h-5 w-5 text-black" />
				</span>
			</div>
		</div>
	);
}

export default Corousel;

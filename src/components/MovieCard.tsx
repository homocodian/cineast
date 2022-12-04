import React from "react";

import { HeartIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface IProps {
	id: number;
	imageUrl: string;
	likes: number;
	title: string;
}

function MovieCard({ title, imageUrl, likes }: IProps) {
	return (
		<div className="mt-2 w-full last:mr-4 md:w-44">
			<div className="relative h-60 w-full rounded-[11px] md:w-44">
				<Image
					className="h-full w-full rounded-[11px] object-cover"
					src={imageUrl}
					alt={title}
					crossOrigin="anonymous"
					fill
					placeholder="blur"
					quality={75}
					sizes="33vw"
					blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPceGBjPQAG7wKj+4Z4jAAAAABJRU5ErkJggg=="
				/>
			</div>
			<div className="mt-1 px-1">
				<div className="flex items-center gap-1">
					<HeartIcon className="h-5 w-5 text-red-500" />
					<span>{likes}%</span>
				</div>
				<p className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">
					{title}
				</p>
				<p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium capitalize text-muted">
					Sci Fi, Drama, Comedy, Thriller
				</p>
			</div>
		</div>
	);
}

export default MovieCard;

import Image from "next/image";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Result } from "@customTypes/UserLists";
import ListMenu from "./ListMenu";

dayjs.extend(relativeTime);

interface ListCardProps {
	list: Result;
}

function ListCard({ list }: ListCardProps) {
	return (
		<div className="py-4">
			{/* header */}
			<div className="flex items-center justify-between">
				<div className="inline-flex items-center gap-4">
					<Image
						src={list.avatar_url}
						alt={list.creator_username}
						height={28}
						width={28}
						className="rounded-full"
					/>
					<div>
						<p className="space-x-2 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold capitalize">
							<span>{list.display_name}</span>
							<span>{dayjs().to(dayjs(list.created_at))}</span>
						</p>
						<p className="text-xs font-semibold">
							Created a new list with {list.count} items
						</p>
					</div>
				</div>
				<ListMenu id={list.id} text={list.body} />
			</div>

			{/* content */}
			<div className="mt-2 cursor-pointer px-4">
				{/* info */}
				<div className="space-y-1">
					<p className="text-sm font-medium">{list.title}</p>
					<p className="text-xs font-medium">{list.body}</p>
				</div>

				{/* list */}
				<div className="mt-2 flex overflow-hidden rounded-md">
					{list.list_images.slice(0, 6).map((imageUrl, index) => (
						<Image
							key={index}
							src={imageUrl}
							alt="list-image"
							width={68}
							height={80}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default ListCard;

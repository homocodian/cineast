import { FC } from "react";

import { MovieResponse } from "@customTypes/index";
import { baseImageUrl } from "@constants/baseImageUrl";
import Image from "next/image";

type ExtraInfoProps = {
	logos: MovieResponse.Images["logos"];
};

const ExtraInfo: FC<ExtraInfoProps> = ({ logos }) => {
	return (
		<aside className="hidden flex-col lg:flex">
			<div>
				<p className="ml-1 text-sm font-semibold text-muted">Activity</p>
				<div className="mt-3 w-72 bg-light-dark px-4 py-4">
					<ul className="flex flex-col gap-4 text-xs">
						<li className="cursor-pointer font-semibold tracking-wider">
							Watched
						</li>
						<li className="cursor-pointer font-semibold tracking-wider">
							Currently Watching
						</li>
						<li className="cursor-pointer font-semibold tracking-wider">
							Rank
						</li>
						<div>
							<p className="font-semibold tracking-wide">Media</p>
							<div className="mt-2 flex gap-3 overflow-hidden">
								{logos?.slice(0, 4).map(({ file_path }) => (
									<div key={file_path}>
										<Image
											src={`${baseImageUrl}/w45/${file_path}`}
											alt="logos"
											height={70}
											width={45}
										/>
									</div>
								))}
							</div>
						</div>
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default ExtraInfo;

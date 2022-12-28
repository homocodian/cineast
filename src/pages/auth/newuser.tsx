import React from "react";
import Image from "next/image";

import { useSession } from "next-auth/react";

function NewUser() {
	const { data, status } = useSession();
	console.log({ data, status });

	return (
		<div className="m-auto flex h-screen justify-center">
			<div className="m-auto h-screen w-full bg-dark-card px-8 sm:h-[500px] sm:w-[420px] sm:rounded-md">
				<div className="my-auto flex h-screen flex-col justify-center gap-6 sm:h-full">
					<div className="flex flex-col space-y-4">
						<Image
							src="/logo.svg"
							height={72}
							width={72}
							alt="cineast"
							className="self-center"
							priority
						/>
						<h2 className="text-center font-semibold uppercase">Cineast</h2>
					</div>
					<div className="space-y-1">
						<h1 className="text-center text-lg font-semibold capitalize tracking-widest">
							Welcome!
						</h1>
					</div>
					<input
						type="text"
						className="rounded border-[2px] border-twitter-blue bg-transparent px-4 py-2 outline-none focus:outline-none"
						placeholder="Choose your username..."
					/>
					<button className="w-full rounded bg-dark px-4 py-2 text-center capitalize shadow-md">
						Get suggestion
					</button>
					<button className="w-full rounded bg-twitter-blue px-4 py-2 text-center">
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewUser;

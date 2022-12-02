import Image from "next/image";

import { signIn, useSession } from "next-auth/react";

function UserImage() {
	const { data, status } = useSession();

	return status === "loading" ? (
		<div className="h-10 w-10 animate-pulse rounded-full bg-light-dark" />
	) : status === "unauthenticated" ? (
		<button
			className="border-none outline-none md:inline-block"
			onClick={() => signIn()}
		>
			Log in
		</button>
	) : (
		<div>
			<Image
				alt="profile"
				src={data?.user?.image!}
				className="h-7 w-7 rounded-full object-cover"
				width={40}
				height={40}
				priority={false}
			/>
		</div>
	);
}

export default UserImage;

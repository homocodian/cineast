import { signIn, SignInOptions } from "next-auth/react";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitter } from "react-icons/io";

interface Login {
	providers: "google" | "twitter";
	options: SignInOptions;
}

function SignIn() {
	const router = useRouter();

	return (
		<div className="grid h-screen w-full sm:place-content-center">
			<div className="h-screen w-full bg-dark-card px-8 py-6 sm:h-auto sm:rounded">
				<div className="flex flex-col gap-8">
					<h2 className="text-center uppercase">Cineast</h2>
					<div className="space-y-1">
						<h1 className="text-center text-lg font-semibold capitalize">
							Create your account
						</h1>
						<h3 className="text-center">Sign up to continue.</h3>
					</div>
					<div>
						<button
							onClick={() =>
								signIn("google", {
									callbackUrl: router.query.callbackUrl as string,
								})
							}
							className="inline-flex w-full items-center justify-center gap-4 rounded-md bg-white px-6 py-4"
						>
							<FcGoogle className="h-7 w-7" />
							<span className="self-center text-black">
								Continue with Google
							</span>
						</button>
						<div className="relative flex items-center py-4">
							<div className="flex-grow border-t border-gray-400"></div>
							<span className="mx-4 flex-shrink text-gray-400">OR</span>
							<div className="flex-grow border-t border-gray-400"></div>
						</div>
						<button
							onClick={() =>
								signIn("twitter", {
									callbackUrl: router.query.callbackUrl as string,
								})
							}
							className="inline-flex w-full items-center justify-center gap-4 rounded-md bg-[#1DA1F2] px-6 py-4"
						>
							<IoLogoTwitter className="h-7 w-7" />
							<span className="self-center">Continue with Twitter</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;

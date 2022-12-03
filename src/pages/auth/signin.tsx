import { signIn, SignInOptions } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitter } from "react-icons/io";

export type TProviders = "google" | "twitter";

function SignIn() {
	const router = useRouter();

	const login = (provider: TProviders) => {
		signIn(provider, {
			callbackUrl: router.query.callbackUrl as string,
		});
	};

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
							Welcome back!
						</h1>
						<h3 className="text-center">Choose your login method</h3>
					</div>
					<div>
						<button
							onClick={() => login("google")}
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
							onClick={() => login("twitter")}
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

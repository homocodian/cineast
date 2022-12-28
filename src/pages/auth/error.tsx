import { useRouter } from "next/router";

import Container from "@components/Container";

function ErrorPage() {
	const router = useRouter();
	return (
		<Container className="grid h-screen place-items-center px-2">
			<div className="w-full max-w-xs rounded border px-8 py-6 sm:min-w-[280px]">
				<div className="flex flex-col gap-6">
					<p className="text-lg">Error: {router.query.error}</p>
					<button
						className="rounded bg-twitter-blue px-4 py-2"
						onClick={() => router.push("/")}
					>
						Home
					</button>
				</div>
			</div>
		</Container>
	);
}

export default ErrorPage;

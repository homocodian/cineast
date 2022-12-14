import { useRouter } from "next/router";

import Container from "@components/Container";

function ErrorPage() {
	const router = useRouter();
	return (
		<Container className="grid h-screen place-items-center">
			<div className="max-w-xs rounded border px-8 py-6">
				<div className="flex flex-col gap-6">
					<p className="text-lg">{router.query.error}</p>
					<button
						className="rounded border px-4 py-2"
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

import { useSession } from "next-auth/react";

function SignIn() {
	const { data, status } = useSession();
	if (status === "loading") {
		return <h1 className="text-center">Loading...</h1>;
	}
	if (status === "authenticated") {
		return <h1 className="text-center"> {JSON.stringify(data)} </h1>;
	}
	return (
		<h1 className="text-center text-2xl">
			login to see home page from landing page&apos;s login button
		</h1>
	);
}

export default SignIn;

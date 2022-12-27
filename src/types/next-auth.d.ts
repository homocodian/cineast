import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		accessToken?: string;
		user: {
			id?: string;
			username?: string;
		} & DefaultSession["user"];
	}

	interface JWT {
		id?: string;
	}
}

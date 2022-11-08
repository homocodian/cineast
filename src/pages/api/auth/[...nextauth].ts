import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_CLIENT_ID as string,
			clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
		}),
	],
};

export default NextAuth(authOptions);

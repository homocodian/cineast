import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import axios from "axios";

import { User } from "@customTypes/User";
import generateNewUserData from "@utils/generateNewUserData";

export const authOptions: NextAuthOptions = {
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
	pages: {
		signIn: "/auth/signin",
		error: "/auth/error",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.id = user.id;
			return token;
		},
		async session({ session, token }) {
			const user = await axios.get<User>(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/by-id/${token.id}`
			);
			if (!user.data?.results?.username) throw new Error("Failed to signin!");
			session.user.id = token.id as string;
			session.user.username = user.data.results.username;
			return session;
		},
		async signIn({ user, account }) {
			try {
				const isUserExists = await axios.get<User>(
					`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/by-id/${user.id}`
				);
				if (isUserExists.data?.results?.id) return true;
				else {
					const userData = generateNewUserData(user, account);
					const res = await axios.post<User>(
						`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/new`,
						userData
					);
					if (res.data?.results?.id) {
						if (res.data.results.id !== user.id)
							throw new Error("A user with this email is already exist!");
						return true;
					} else throw new Error("Failed to create user!");
				}
			} catch (error) {
				throw new Error(`${error}`);
			}
		},
	},
};

export default NextAuth(authOptions);

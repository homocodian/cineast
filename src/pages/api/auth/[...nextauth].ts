// import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import axios from "axios";
import { nanoid } from "nanoid";

import { User } from "@customTypes/User";
import generateRandomNumber from "@utils/generateRandomNumber";

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
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.id as string;
			return session;
		},
		// async signIn({ user }) {
		// 	try {
		// 		const isUserExists = await axios.get<User>(
		// 			`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/by-id/${user.id}`
		// 		);
		// 		console.log(isUserExists);
		// 		if (isUserExists.data?.results?.id) {
		// 			return true;
		// 		} else {
		// 			console.log({
		// 				id: user.id,
		// 				username: user.name
		// 					? user.name.split(" ").join("").toLowerCase() +
		// 					  generateRandomNumber()
		// 					: nanoid(), // genrate username from the displayname (remove all spaces and special characters from the name and add two random number in the last).
		// 				display_name: user.name,
		// 				email: user.email,
		// 				avatar_url: user.image,
		// 				backdrop_url: "",
		// 				bio: "",
		// 				device_id: "WEB",
		// 				token_id: "",
		// 			});
		// 			const res = await axios
		// 				.post<User>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/new`, {
		// 					id: user.id,
		// 					username: user.name
		// 						? user.name.split(" ").join("").toLowerCase() +
		// 						  generateRandomNumber()
		// 						: nanoid(),
		// 					display_name: user.name,
		// 					email: user.email,
		// 					avatar_url: user.image,
		// 					backdrop_url: "",
		// 					bio: "",
		// 					device_id: "WEB",
		// 					token_id: "",
		// 				})
		// 				.catch(() => {
		// 					throw new Error("Failed to create user!");
		// 				});
		// 			console.log(res);
		// 			if (res.data?.results?.id) {
		// 				return true;
		// 			} else {
		// 				throw new Error("Failed to create user!");
		// 			}
		// 		}
		// 	} catch (error) {
		// 		console.log({ error });
		// 		throw new Error("Failed to login!");
		// 	}
		// },
	},
};

export default NextAuth(authOptions);

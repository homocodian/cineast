import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<>
			<NextNProgress color="#1DA1F2" />
			<SessionProvider session={session}>
				<div className={`${inter.variable} font-sans`}>
					<Component {...pageProps} />
				</div>
			</SessionProvider>
		</>
	);
}

export default MyApp;

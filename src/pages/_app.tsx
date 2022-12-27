import { useState } from "react";
import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<NextNProgress color="#1DA1F2" />
			<SessionProvider session={session}>
				<div className={`${inter.variable} font-sans`}>
					<Hydrate state={pageProps.dehydratedState}>
						<Component {...pageProps} />
					</Hydrate>
				</div>
			</SessionProvider>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
	);
}

export default MyApp;

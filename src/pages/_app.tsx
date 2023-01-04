import { useRef } from "react";
import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	const queryClient = useRef(new QueryClient());
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<QueryClientProvider client={queryClient.current}>
				<NextNProgress color="#1DA1F2" />
				<SessionProvider session={session}>
					<Hydrate state={pageProps.dehydratedState}>
						<Component {...pageProps} />
					</Hydrate>
				</SessionProvider>
				<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;

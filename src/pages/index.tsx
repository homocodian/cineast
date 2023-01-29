import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";

import OneTapSignin from "@components/auth/OneTapSignin";
import { Features, Footer, HeroSection, HomeNavbar } from "@components/index";

const LandingPage: NextPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<>
			<Head>
				<title>Cineast</title>
				<meta
					name="description"
					content="A social media platform for movie enthusiasts"
				/>
				<link rel="icon" href="favicon.ico" />
			</Head>
			<HomeNavbar isLoading={isLoading} />
			{/* main */}
			<main>
				<HeroSection />
				<Features />
			</main>
			<OneTapSignin setLoading={setIsLoading} />
			<Footer />
		</>
	);
};

export default LandingPage;

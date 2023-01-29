import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";

import { Features, Footer, HeroSection, HomeNavbar } from "@components/index";
import OneTapSignin from "@components/auth/OneTapSignin";

const LandingPage: NextPage = () => {
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
			<HomeNavbar />
			{/* main */}
			<main>
				<HeroSection />
				<Features />
			</main>
			<OneTapSignin />
			<Footer />
		</>
	);
};

export default LandingPage;

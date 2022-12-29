import Head from "next/head";
import type { NextPage } from "next";

import { HeroSection, HomeNavbar } from "@components/index";

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
				<div className="min-h-screen bg-gradient-to-b from-[#4e5b68] to-[#49433c]">
					<HeroSection />
				</div>
			</main>
		</>
	);
};

export default LandingPage;

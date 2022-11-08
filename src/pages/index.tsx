import type { NextPage } from "next";
import Head from "next/head";

import MovieCard from "@components/MovieCard";
import useData from "@hooks/useData";
import Navbar from "@components/navbar/Navbar";

const LandingPage: NextPage = () => {
	const moviescard = useData();

	return (
		<div>
			<Head>
				<title>Cineast</title>
				<meta
					name="description"
					content="A social media platform for movie enthusiasts"
				/>
				<link rel="icon" href="favicon.ico" />
			</Head>

			<main>
				<Navbar />
				{/* main */}
				<div className="mx-4 flex flex-col justify-center py-4 md:mx-8 md:py-8">
					{/* category name */}
					<p className="text-lg font-bold">
						Trending Now - <span className="text-gray-300">English</span>
					</p>
					{/* category name */}

					{/* category item */}
					<div className="grid grid-cols-2 gap-x-4 xs:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
						{moviescard.map((item) => (
							<MovieCard {...item} key={item.id} />
						))}
					</div>
					{/* category item */}
				</div>
			</main>
		</div>
	);
};

export default LandingPage;

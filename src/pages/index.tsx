import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Dropdown, Menu } from "../components";
import { SearchIcon } from "@assets/icons";
import MovieCard from "@components/MovieCard";
import useData from "@hooks/useData";

const LandingPage: NextPage = () => {
  const data = useData();

  return (
    <div>
      <Head>
        <title>Cineast</title>
        <meta
          name="description"
          content="A social media platform for movie enthusiasts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* navbar */}
        <div className="navbar flex h-16 items-center justify-between bg-custom-cyan pl-8 pr-8">
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              legacyBehavior={false}
              className="brand font-playfair text-lg font-medium"
            >
              Cineast
            </Link>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/home"
                legacyBehavior={false}
                className="hidden w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium text-gray-700 focus:outline-none md:inline-flex"
              >
                Home
              </Link>
              <Dropdown title="Explore" />
              <Dropdown title="Community" />
              <Link
                href="/watch"
                legacyBehavior={false}
                className="hidden w-full items-center justify-center rounded-md px-1 py-2 text-sm font-medium text-gray-700 focus:outline-none md:inline-flex"
              >
                Watch
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="hidden h-8 w-52 items-center justify-center rounded bg-white px-2 py-1 xxs:flex lg:w-64">
              <input
                type="text"
                name="search-movies"
                className="w-4/5 rounded text-sm outline-none placeholder:text-xs focus:outline-none"
                placeholder="Find Movies, Tv Shows"
              />
              <button className="inline-flex h-10 w-1/5 items-center justify-center border-none focus:outline-none">
                <SearchIcon width={15} height={15} />
              </button>
            </div>
            <button className="hidden border-none outline-none md:inline-block">
              Sign up
            </button>
            <button className="hidden border-none outline-none md:inline-block">
              Log in
            </button>
            <Menu />
          </div>
        </div>
        {/* navbar */}

        {/* main */}
        <div className="mx-4 flex flex-col justify-center py-4 md:mx-8 md:py-8">
          {/* category name */}
          <p className="text-lg font-bold">
            Trending Now - <span className="text-gray-300">English</span>
          </p>
          {/* category name */}

          {/* category item */}
          <div className="grid grid-cols-2 gap-x-4 xs:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
            {data.map((item) => (
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

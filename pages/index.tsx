import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
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
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
          <Image src="/logo.svg" width={512} height={512} alt="cineast" />
          <h1 className="text-3xl font-bold underline">Hello cineast!</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;

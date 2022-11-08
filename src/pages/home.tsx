import { NextPage, GetServerSidePropsContext } from "next";
import { unstable_getServerSession } from "next-auth";

import {
	SideNavbar,
	Carousel,
	Navbar,
	MovieCard,
	Chart,
	StreamingNow,
	TrendingHashTags,
} from "../components";
import useData from "../hooks/useData";
import { authOptions } from "./api/auth/[...nextauth]";

const categories = {
	Today: Array.from(Array(6).keys()).map((item, index) => ({
		id: index,
		title: `Random name from today nice awesome name with awesome content ${item}`,
		likes: +(Math.random() * 100).toFixed(),
	})),
	Monthly: Array.from(Array(6).keys()).map((item, index) => ({
		id: index,
		title: `Random name from monthly nice awesome name with awesome content ${item}`,
		likes: +(Math.random() * 100).toFixed(),
	})),
	"All Time": Array.from(Array(6).keys()).map((item, index) => ({
		id: index,
		title: `Random name from all time nice awesome name with awesome content ${item}`,
		likes: +(Math.random() * 100).toFixed(),
	})),
};

const FakeData = [
	{
		title: "Community",
		text: "MinnionSweep",
	},
	{
		title: "News",
		text: "Chris Hems”Worth” to be in the upcomming from austria that he was a noob",
	},
	{
		title: "Reels",
		text: "Euphoria",
	},
	{
		title: "Community",
		text: "Barbie",
	},
];

const Home: NextPage = () => {
	const data = useData();

	return (
		<div className="relative flex h-screen flex-row bg-[#F7F7F7] xxxs:overflow-auto">
			<SideNavbar />
			<div className="absolute right-0 w-full py-1 md:w-[calc(100%-15rem)]">
				<div className="pl-4 md:pl-6">
					<Navbar />
					<div className="md:pt-6">
						<h2 className="text-lg font-semibold">
							Trending Now - <span className="text-[#7F7F7F]">English</span>
						</h2>
						<div className="space-y-8">
							<Carousel>
								{data.map((item) => (
									<MovieCard {...item} key={item.id} />
								))}
							</Carousel>
							<Carousel
								className="py-4"
								buttonStyle={{
									padding: "8px",
								}}
								buttonClassName="shadow-lg"
							>
								<Chart categories={categories} />
								<StreamingNow categories={categories} />
								<TrendingHashTags data={FakeData} />
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		authOptions
	);

	if (!session) {
		return {
			redirect: {
				destination: "/auth/signin",
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
}

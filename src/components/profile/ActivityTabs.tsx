import { Tab } from "@headlessui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Lists = dynamic(() => import("./Lists"));
const Reviews = dynamic(() => import("./Reviews"));
const FeedGraph = dynamic(() => import("./FeedGraph"));
const RecentlyWatchedMovies = dynamic(() => import("./RecentlyWatchedMovies"));

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

const Tabs = [
	{ tab: "Feed", hrefs: ["feed"] },
	{ tab: "Reviews & Thoughts", hrefs: ["reviews", "thoughts"] },
	{ tab: "Articles", hrefs: ["articles"] },
	{ tab: "Lists", hrefs: ["lists"] },
] as const;

export default function ActivityTabs({ userName }: { userName: string }) {
	const router = useRouter();

	const getSelectedTab = () => {
		const tab = router.query?.tab
			? decodeURI(router.query?.tab as string)
			: null;

		if (!tab) {
			return 0;
		}
		const index = Tabs.findIndex(({ hrefs }) =>
			(hrefs as readonly string[]).includes(tab)
		);
		return index < 0 ? 0 : index;
	};

	getSelectedTab();

	return (
		<div className="w-full">
			<Tab.Group defaultIndex={0} selectedIndex={getSelectedTab()}>
				<Tab.List className="rounded-x flex space-x-1 p-1 text-xs md:text-sm lg:text-base">
					{Tabs.map(({ tab, hrefs }) => (
						<Tab
							key={tab}
							title={tab}
							className={({ selected }) =>
								classNames(
									"w-full overflow-hidden text-ellipsis whitespace-nowrap px-1 py-2.5 font-semibold leading-5 outline-none hover:bg-white/[0.12] hover:text-white",
									selected
										? "border-b-2 border-b-twitter-blue text-white"
										: "text-muted"
								)
							}
							onClick={() => {
								router.push(
									{
										pathname: `/profile/[username]`,
										query: {
											username: userName,
											tab: hrefs[0],
										},
									},
									`/profile/${userName}?tab=${encodeURI(hrefs[0])}`,
									{ shallow: true }
								);
							}}
						>
							{tab}
						</Tab>
					))}
				</Tab.List>
				<div className="my-1 h-[0.1px] w-full bg-muted" />
				<Tab.Panels className="my-4">
					<Tab.Panel>
						<div className="grid place-content-center">
							<FeedGraph />
						</div>
						<RecentlyWatchedMovies userName={userName} />
					</Tab.Panel>
					<Tab.Panel>
						<Reviews userName={userName} />
					</Tab.Panel>
					<Tab.Panel>
						<h1>Articles cooming soon...</h1>
					</Tab.Panel>
					<Tab.Panel>
						<Lists userName={userName} />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

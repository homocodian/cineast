import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

interface ITabs {
	[key: string]: string;
}

interface IProps {
	tabs: ITabs;
}

function Tabs({ tabs }: IProps) {
	return (
		<div className="w-full px-2 py-6 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex space-x-8 rounded-xl p-1">
					{Object.keys(tabs).map((category) => (
						<Tab
							key={category}
							className={({ selected }) =>
								classNames(
									"text-sm font-semibold capitalize leading-5 outline-none focus:outline-none",
									selected ? "text-white" : "text-muted"
								)
							}
						>
							{category}
						</Tab>
					))}
				</Tab.List>
				<div className="mt-1 h-px w-full bg-muted" />
				<Tab.Panels className="mt-4">
					{Object.values(tabs).map((content, idx) => (
						<Tab.Panel key={`${idx}`}>
							<p className="text-[#A3A3A3]">{content}</p>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

export default Tabs;

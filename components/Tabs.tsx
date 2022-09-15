import { Tab } from "@headlessui/react";
import { HeartIcon } from "@heroicons/react/20/solid";

export type Categories = {
  [key: string]: {
    id: number;
    title: string;
    likes: number;
  }[];
};

interface IProps {
  categories: Categories;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({ categories }: IProps) {
  return (
    <div className="w-full max-w-md px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-4 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "text-sm outline-none focus:outline-none",
                  selected ? "text-black" : "text-muted"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className="rounded-xl bg-white focus:outline-none"
            >
              <ul className="divide-y-2">
                {posts.map((post, index) => (
                  <li
                    key={post.id}
                    className="relative flex cursor-default items-center justify-between gap-10 p-3"
                  >
                    <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-5">
                      <span className="mr-1 text-muted">{`${
                        index + 1
                      }. `}</span>
                      {post.title}
                    </h3>
                    <div className="spzce-x-3 inline-flex items-center">
                      <HeartIcon className="h-5 w-6 text-red-500" />
                      <span className="text-xs">56%</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

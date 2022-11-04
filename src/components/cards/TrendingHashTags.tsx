import { HashtagIcon } from "@heroicons/react/20/solid";

import { Card } from "..";

interface IProps {
  data: { title: string; text: string }[];
}

function TrendingHashTags({ data }: IProps) {
  return (
    <Card
      header={
        <div className="flex items-center justify-between">
          <div className="inline-flex flex-row items-center gap-1">
            <HashtagIcon className="h-6 w-6 text-cineast-yellow" />
            <span className="text-sm font-medium capitalize">
              Treanding Hashtags
            </span>
          </div>
          <button className="text-xs capitalize text-blue-500">View All</button>
        </div>
      }
      body={
        <ul className="flex flex-col divide-y-2">
          {data.map((item, index) => (
            <li
              className="flex flex-col justify-between gap-3 py-3 px-2"
              key={index.toString()}
            >
              <h3 className="text-sm text-muted">{item.title}</h3>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm ">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      }
    />
  );
}

export default TrendingHashTags;

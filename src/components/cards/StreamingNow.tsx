import { Card, Tabs } from "..";
import TickertStar from "../../assets/icons/Ticket Star.svg";

interface IProps {
  categories: Tabs.Categories;
}

function StreamingNow({ categories }: IProps) {
  return (
    <Card
      header={
        <div className="flex items-center justify-between">
          <div className="inline-flex flex-row items-center gap-1">
            <TickertStar height={24} width={24} />
            <span className="text-sm font-medium capitalize">
              Streaming Now
            </span>
          </div>
          <button className="text-xs capitalize text-blue-500">View All</button>
        </div>
      }
      body={<Tabs.default categories={categories} />}
    />
  );
}

export default StreamingNow;

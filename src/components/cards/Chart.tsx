import { Tabs, Card } from "..";
import Activity from "../../assets/icons/Activity.svg";

interface IProps {
  categories: Tabs.Categories;
}

function ChartCard({ categories }: IProps) {
  return (
    <Card
      header={
        <div className="flex items-center justify-between">
          <div className="inline-flex flex-row items-center gap-1">
            <Activity height={24} width={24} />
            <span className="text-sm font-medium capitalize">Charts</span>
          </div>
          <button className="text-xs capitalize text-blue-500">View All</button>
        </div>
      }
      body={<Tabs.default categories={categories} />}
    />
  );
}

export default ChartCard;

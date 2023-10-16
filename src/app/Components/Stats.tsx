import { stats } from "../constants";
import StatCard from "./StatCard";
function Stats({ clever }: { clever: "academy" | "technology" }) {
  return (
    <div className="grid sm:grid-cols-2 mxl:px-10 xl:px-20 lg:px-0 px-5 sm:py-10 ">
      {stats.map((stat) => (
        <StatCard clever={clever} key={stat.id} StatDetails={stat} />
      ))}
    </div>
  );
}

export default Stats;

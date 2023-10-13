import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Stat {
  id: string;
  border: string;
  number: number;
  title: string;
}
interface props {
  StatDetails: Stat;
  clever: "academy" | "technology";
}

function StatCard({ StatDetails, clever }: props) {
  const [DispNum, setNum] = useState(0);
  const step = 1000 / StatDetails.number;
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (DispNum < StatDetails.number && inView) {
      const timeout = setTimeout(() => {
        setNum(DispNum + 1);
      }, step);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DispNum, StatDetails.number, inView]);
  return (
    <div ref={ref} className={`${StatDetails.border} border-ph-0 p-7`}>
      <div
        className={`text-6xl ${
          clever === "technology" ? "text-tech-0" : " text-aca-0"
        } transall hover:tracking-wider`}
      >
        {DispNum !== 0 && "+"}
        {DispNum}
      </div>
      <div className="font-semibold text-ph-0 text-sm">{StatDetails.title}</div>
    </div>
  );
}

export default StatCard;

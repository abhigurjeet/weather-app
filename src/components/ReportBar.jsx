import { useContext, useEffect, useState } from "react";
import { myContext } from "../MyContext";
import { Chart } from "react-google-charts";

const ReportBar = () => {
  const store = useContext(myContext);
  let [hourly, setHourly] = useState();
  let [now, setNow] = useState();

  const options = {
    title: "Upcoming Hours",
    vAxis: { minValue: 0, textPostion: "none" },
  };
  useEffect(() => {
    if (store.report.current) {
      let arr = [];
      arr.push(["", ""]);
      arr.push([
        `${store.report.forecast.forecastday[0].day.daily_chance_of_rain} %`,
        store.report.forecast.forecastday[0].day.daily_chance_of_rain,
      ]);
      let temp = store.report.forecast.forecastday[0].hour.filter(
        (item) => item.time > store.report.current.last_updated
      );
      temp.map((item) =>
        arr.push([`${item.chance_of_rain} %`, item.chance_of_rain])
      );
      setHourly(arr);
      setNow(new Date(store.report.current.last_updated));
    }
  }, [store.report]);
  return (
    <Chart
      chartType="AreaChart"
      data={hourly}
      height="85%"
      options={options}
      className="chart"
    />
    // <Chart
    //   chartType="AreaChart"
    //   data={[
    //     ["100", 100],
    //     ["90", 90],
    //   ]}
    //   width="100%"
    //   options={options}
    //   className="chart"
    // />
  );
};
export default ReportBar;

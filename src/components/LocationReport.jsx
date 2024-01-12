import { useContext, useEffect } from "react";
import { myContext } from "../MyContext";
import axios from "axios";
import {
  LowerContainer,
  LowerContainerBoxes,
  UpperContainer,
  Box,
} from "./LocationReport.style";
import ReportBar from "./ReportBar";
const LocationReport = () => {
  const store = useContext(myContext);
  return (
    <>
      <UpperContainer>
        <h3>Welcome!</h3>
        <h4>Checkout today's weather information</h4>
        <ReportBar />
      </UpperContainer>
      <LowerContainer>
        <h4>More details of today's weather</h4>
        <LowerContainerBoxes>
          <Box>
            <p>Humidity</p>
            <h1>{store.report.current && store.report.current.humidity}</h1>
          </Box>
          <Box>
            <p>Wind </p>
            <h1>{store.report.current && store.report.current.wind_kph} kph</h1>
          </Box>
          <Box>
            <p>Precipitation </p>
            <h1>
              {store.report.current && store.report.current.precip_in} inches
            </h1>
          </Box>
          <Box>
            <p>UV Index</p>
            <h1>{store.report.current && store.report.current.uv}</h1>
          </Box>
          <Box>
            <p>Feels like</p>
            <h1>
              {store.report.current && store.report.current.feelslike_c} C
            </h1>
          </Box>
          <Box>
            <p>Chance of rain</p>
            <h1>
              {store.report.forecast &&
                store.report.forecast.forecastday[0].day
                  .daily_chance_of_rain}{" "}
              %
            </h1>
          </Box>
        </LowerContainerBoxes>
      </LowerContainer>
    </>
  );
};
export default LocationReport;

import { useContext } from "react";
import { myContext } from "../MyContext";
import LocationReport from "./LocationReport";
import LocationSearch from "./LocationSearch";
import {
  HomepageContainer,
  LeftContainer,
  RightContainer,
} from "./homepage.style";
import RecentLocations from "./RecentLocations";

const Homepage = () => {
  const store = useContext(myContext);
  console.log(store.report);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <HomepageContainer>
      <LeftContainer>
        <LocationSearch />
        <h3>
          {store.name} , {store.state && store.state}
        </h3>
        <h3>{new Date().toLocaleDateString("en-US", options)}</h3>
        <h1>
          {store.report.current ? (
            <>{store.report.current.temp_c}&#176;C</>
          ) : (
            "Temperature"
          )}
        </h1>
        <h2>
          {store.report.current ? (
            <>{store.report.current.condition.text}</>
          ) : (
            "Weather"
          )}
        </h2>
        {store.recent.length ? (
          <>
            <h1>Recent searches</h1>
            <RecentLocations />
          </>
        ) : (
          <h1>No recent searches</h1>
        )}
      </LeftContainer>
      <RightContainer>
        <LocationReport />
      </RightContainer>
    </HomepageContainer>
  );
};
export default Homepage;

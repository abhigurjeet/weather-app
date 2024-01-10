import React from "react";
import LocationSearch from "../components/LocationSearch";
import LocationReport from "../components/LocationReport";
const Home = () => {
  return (
    <>
      <LocationReport />
      <h1>This is the home page</h1>
      <LocationSearch />
    </>
  );
};

export default Home;

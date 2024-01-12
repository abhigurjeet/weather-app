import React, { useContext } from "react";
import { myContext } from "../MyContext";
import { v4 as uuidv4 } from "uuid";

const RecentLocations = () => {
  const { recent } = useContext(myContext);

  recent.reverse();
  const listItems = recent.map((item) => (
    <li key={uuidv4()}>
      {item.name} {item.state && `, ${item.state}`}
    </li>
  ));

  listItems.reverse();

  return <ol>{listItems}</ol>;
};

export default RecentLocations;

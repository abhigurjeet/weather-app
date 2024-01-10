import { useContext, useEffect } from "react";
import { myContext } from "../MyContext";
import axios from "axios";
const LocationReport = () => {
  const store = useContext(myContext);
  useEffect(() => {
    if (store.name) {
      axios
        .get(`${process.env.REACT_APP_API_URL2}`, {
          params: {
            q: `${store.lat},${store.lon}`,
            key: `${process.env.REACT_APP_API_KEY2}`,
          },
        })
        .then((res) => console.log(res.data));
    }
  }, [store.lat, store.lon, store.name]);
  return <div>Hello</div>;
};
export default LocationReport;

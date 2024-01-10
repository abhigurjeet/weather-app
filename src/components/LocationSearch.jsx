import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { myContext } from "../MyContext";
const LocationSearch = () => {
  const store = useContext(myContext);
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState(" ");
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && data[0]) {
      store.setLocation(data[0]);
      store.setRecentSearches(data[0]);
    }
  };
  const handleOnClick = (i) => {
    store.setLocation(data[i]);
    store.setRecentSearches(data[i]);
  };
  useEffect(() => {
    if (inputText !== "") {
      axios
        .get(`${process.env.REACT_APP_API_URL1}`, {
          params: {
            q: `${inputText}`,
            appid: `${process.env.REACT_APP_API_KEY1}`,
            limit: 5,
          },
        })
        .then((res) => setData(res.data));
    }
  }, [inputText]);
  return (
    <>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <ul>
        {data.map((item, i) => {
          return (
            <div key={uuid()} onClick={() => handleOnClick(i)}>
              <li>
                {item.name} , {item.state && item.state}
              </li>
              <li>
                Lat-{item.lat} , Lon-{item.lon}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default LocationSearch;

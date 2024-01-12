import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { myContext } from "../MyContext";
import { ResultItem, SearchContainer } from "./LocationSearch.style";
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
    setInputText("");
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
  useEffect(() => {
    if (store.name) {
      axios
        .get(`${process.env.REACT_APP_API_URL2}`, {
          params: {
            q: `${store.lat},${store.lon}`,
            key: `${process.env.REACT_APP_API_KEY2}`,
          },
        })
        .then((res) => store.setReport(res.data));
    }
  }, [store.lat, store.lon, store.name]);
  return (
    <SearchContainer>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      {data.map((item, i) => {
        return (
          <ResultItem key={uuid()} onClick={() => handleOnClick(i)}>
            {item.name} {item.state && <>, {item.state}</>}
          </ResultItem>
        );
      })}
    </SearchContainer>
  );
};
export default LocationSearch;

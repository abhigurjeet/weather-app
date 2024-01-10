import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import { myContext } from "./MyContext";
function App() {
  const [store, setStore] = useState({
    name: "",
    state: "",
    lat: "",
    lon: "",
    recent: [],
    setLocation: (loc) => {
      setStore((prev) => ({
        ...prev,
        name: loc.name,
        state: loc.state,
        lat: loc.lat,
        lon: loc.lon,
      }));
    },
    setRecentSearches: (loc) => {
      setStore((prev) => {
        let tempRecent = [...prev["recent"]];
        tempRecent.push({
          name: loc.name,
          state: loc.state,
          lat: loc.lat,
          lon: loc.lon,
        });
        if (tempRecent.length > 5) tempRecent.shift();
        return { ...prev, recent: tempRecent };
      });
    },
  });
  return (
    <myContext.Provider value={store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </myContext.Provider>
  );
}

export default App;

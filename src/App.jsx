import { React, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  // city for search bar
  const [city, setCity] = useState("");
  const handleSearch = (c) => {
    setCity(c);
    console.log("searching", c);
  };

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
    </>
  );
}

export default App;

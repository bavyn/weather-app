import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    if (city) {
      onSearch(city);
    }
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="city" type="text" placeholder="enter a city" />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchBar;

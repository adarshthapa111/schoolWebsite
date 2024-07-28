"use client";
import React, { useState } from "react";
import supabase from "../Supabase/config";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState();

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length === 0) {
      onSearch([]);
      return;
    }

    //Fetch all the data from Students table
    const { data, error } = await supabase
      .from("Students")
      .select("*")
      .ilike("FirstName", `%${value}%`);

    if (error) {
      console.log(error, "Error fetching data!");
    } else {
      onSearch(data);
    }
  };

  return (
    <div className="w-1/2 flex justify-center  dark:bg-gray-900">
      <form className="w-full max-w-2xl px-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 rounded-lg shadow-sm border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200 ease-in-out text-black bg-white dark:bg-gray-800 dark:text-white"
            placeholder="Search for students..."
            type="search"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default SearchBar;

import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [barValue, setBarValue] = useState("");
  const navigate = useNavigate();

  return (
    <div class="w-72 cursor-pointer ">
      <div class="relative flex items-center w-full h-12 rounded focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-blue-600 bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          class="peer h-full w-full outline-none text-sm bg-gray-200 pr-2"
          type="text"
          id="search"
          placeholder="Tìm kiếm"
        />
      </div>
    </div>
  );
}

export default SearchBar;

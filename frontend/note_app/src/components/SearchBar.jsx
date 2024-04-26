import React from "react";

export default function SearchBar({ onSearch }) {

  return (
    <div className="bg-gray-200 p-2 rounded-lg flex items-center max-h-10 w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
      <input
        type="text"
        placeholder="Buscar por tags..."
        onChange={(e) => onSearch(e.target.value)}
        className="bg-transparent p-2 w-full focus:outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}

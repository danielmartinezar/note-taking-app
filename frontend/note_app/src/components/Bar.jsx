import React from "react";
import SearchBar from "./SearchBar";

export default function Bar({ onSearch }) {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between border-b border-[#33353F] px-4 py-2 z-50 bg-white">
      <a href="/" className="text-xl text-[#828282] font-semibold">My Notes</a>
      <div className="flex-grow">
        <div className="w-full max-w-lg mx-auto">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
      <div style={{ width: "48px" }}> {/* Espaciador */} </div>
    </div>
  );
}

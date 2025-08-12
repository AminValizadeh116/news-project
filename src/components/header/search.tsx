import Image from "next/image";
import React from "react";
import searchIcon from "./../../../public/icons-search.svg";

function Search() {
  return (
    <div className="flex justify-end max-sm:justify-start max-sm:col-span-2">
      <div className="flex items-center justify-center border-y border-l bg-amber-50 rounded-l">
        <button className="cursor-pointer active:bg-amber-100">
          <Image src={searchIcon} alt="mmad" width={25} />
        </button>
      </div>
      <input type="text" className="border-y border-r rounded-r bg-amber-50" placeholder="search" />
    </div>
  );
}

export default Search;

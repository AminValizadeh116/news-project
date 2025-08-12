import React from "react";
import Search from "./search";
import Navbar from "./navbar";
import Logo from "./logo";

function Header() {
  return (
    <div className="items-center justify-between grid grid-cols-3 max-md:grid-cols-2 gap-3">
      <Logo />
      <div className="text-right">
        <Navbar />
      </div>
      <Search />
    </div>
  );
}

export default Header;

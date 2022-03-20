import React from "react";
import Logo from "../../../../src/assets/logos/Logo.png";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex">
          <input className="p-2 w-full border-2" type="search" name="" id="" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

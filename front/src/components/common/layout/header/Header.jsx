import React from "react";

const Header = () => {
  return (
    <header className="h-[100px] flex justify-between items-center">
      <h1 className="text-3xl font-bold ">Address Book</h1>
      <button className="btn btn-accent">Login</button>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  title: string;
  homeText: string;
  aboutText: string;
  textfrom: string;
  userform: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, homeText, aboutText, textfrom, userform }) => {
  return (
    <>
    <nav className="bg-purple-800 text-white flex justify-between items-center p-3">
      <span className="text-xl font-bold mb-2">{title}</span>
      <ul className="flex space-x-8 items-center">
        <Link
          to="/home"
          className="text-white hover:bg-black  px-3 py-2 rounded  no-underline"
        >
          {homeText}
        </Link>
        <Link
          to="/about"
          className="text-white hover:bg-black  px-3 py-2 rounded  no-underline"
        >
          {aboutText}
        </Link>
        <Link
          to="/contact"
          className="text-white hover:bg-black  px-3 py-2 rounded  no-underline"
        >
          {userform}
        </Link>
        <Link
          to="/textfrom"
          className=" text-white hover:bg-black px-3 py-2 rounded  no-underline"
        >
          {textfrom}
        </Link>
      </ul>
      <form className="items-center flex mx-2 mb-2">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 mx-1 rounded-l bg-white  border-2 border-gray-600 text-black"
        />
        <button
          type="submit"
          className="p-2 bg-green-500 hover:bg-green-600 rounded-r text-white"
        >
          Search
        </button>
      </form>
      {/* <button 
        type="button" 
        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
      </button> */}
    </nav>
    </>
  );
};

export default Navbar;

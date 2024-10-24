import React from "react";
import './Navbar.css'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="main">
      
        <input type="text" placeholder="Search city" className="input"/>
        <button type="submit" class="search">Submit</button>
      
    </div>
  );
};

export default Navbar;

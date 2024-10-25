import React from "react";
import './Navbar.css'

const Navbar = ({handleChange,handleSubmit}) => {
  

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search city" className="input" onChange={handleChange} />
        <button type="submit" class="search">Submit</button>
      </form>
    </div>
  );
};

export default Navbar;

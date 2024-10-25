import React from "react";
import './Navbar.css'

const Navbar = ({handleChange,handleSubmit,input}) => {
  

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search city" className="input" onChange={handleChange} value={input}
        />
        <button type="submit" className="search">Submit</button>
      </form>
    </div>
  );
};

export default Navbar;

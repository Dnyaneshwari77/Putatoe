import React from "react";
import "../App.css";
import {
  FaMapMarkerAlt,
  FaBell,
  FaCartPlus,
  FaSearch,
  FaMicrophone,
} from "react-icons/fa";
let iconStyles = {
  width: "30px",
  height: "30px",
};
function Navbar() {
  return (
    <div className="Navbar">
      <div className="upper_row">
        <FaMapMarkerAlt style={iconStyles} />
        <p>
          Oppo to G.H.Raisoni Institude of Maharastra
          ,Pune,Pune,Maharastra,412207,India.
        </p>
        <FaBell style={iconStyles} />
        <FaCartPlus style={iconStyles} />
      </div>

      <div className="searchbar">
        <span>
          <FaSearch />
          <input
            type="text"
            placeholder="Search for Product"
            id="search"
            name="Search"
          ></input>
        </span>
        <FaMicrophone />
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
export default function BottonMenu() {
  let iconStyles = {
    color: "rgb(12, 54, 54)",
    width: "20px",
    height: "20px",
  };
  return (
    <div className="bottom_menu">
      <div>
        <FaHome style={iconStyles} />
        <spna>Home</spna>
      </div>
      <div>
        <FaUser style={iconStyles} />
        <spna>Profile</spna>
      </div>
      <div>
        <img src="https://www.putatoe.com/img/logo.png" />
      </div>
      <div>
        <FaRegListAlt style={iconStyles} />
        <spna>Follow List</spna>
      </div>

      <div>
        <BiMessageRoundedDetail style={iconStyles} />
        <spna>Chart</spna>
      </div>
    </div>
  );
}

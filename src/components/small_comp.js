import React from "react";
import {
  FaMobileAlt,
  FaDesktop,
  FaRupeeSign,
  FaBullhorn,
  FaRegNewspaper,
  FaBloggerB,
  FaUsers,
  FaCommentAlt,
  FaFire,
  FaRegLightbulb,
  FaTint,
  FaAngleRight,
} from "react-icons/fa";
import Service_text from "./Service_text";
function Small_comp() {
  let iconStyles = {
    width: "60%",
    height: "60%",
    color: "rgb(88, 184, 172)",
  };

  return (
    <div className="small_component">
      <span>
        <FaMobileAlt style={iconStyles} />
        <Service_text text="Prepaid Mobile Recharge" />
      </span>
      <span>
        <FaDesktop style={iconStyles} />
        <Service_text text="DTH Recharge" />
      </span>
      <span>
        <FaRupeeSign style={iconStyles} />
        <Service_text text="Loans" />
      </span>
      <span>
        <FaBullhorn style={iconStyles} />
        <Service_text text="Promotion" />
      </span>
      <span>
        <FaRegNewspaper style={iconStyles} />
        <Service_text text="News" />
      </span>
      <span>
        <FaBloggerB style={iconStyles} />
        <Service_text text="Blog" />
      </span>
      <span>
        <FaUsers style={iconStyles} />
        <Service_text text="Jobs" />
      </span>
      <span>
        <FaCommentAlt style={iconStyles} />
        <Service_text text="Anonymous Feedback" />
      </span>
      <span>
        <FaFire style={iconStyles} />
        <Service_text text="Gas Booking" />
      </span>
      <span>
        <FaRegLightbulb style={iconStyles} />
        <Service_text text="Electricity Bill" />
      </span>
      <span>
        <FaTint style={iconStyles} />
        <Service_text text="Water bill" />
      </span>
      <span>
        <FaAngleRight style={iconStyles} />
        <Service_text text="See More" />
      </span>
    </div>
  );
}

export default Small_comp;

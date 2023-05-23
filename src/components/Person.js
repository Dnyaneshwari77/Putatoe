import React from "react";

function Person(props) {
  const { name, img_src, subtitle } = props;
  return (
    <div className="profile">
      <img src={img_src}></img>
      <h4>{name}</h4>
      <p>{subtitle}</p>
    </div>
  );
}

export default Person;

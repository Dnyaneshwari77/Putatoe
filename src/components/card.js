import React from "react";

export default function Card(props) {
  const { title, img_src } = props;
  return (
    <div className="card">
      <div className="img_container">
        <img src={img_src} />
      </div>
      <h2>{title}</h2>
    </div>
  );
}

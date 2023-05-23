import React from "react";

export default function Service_text(props) {
  const { text } = props;
  return (
    <div className="service_name">
      <p>{text}</p>
    </div>
  );
}

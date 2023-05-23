import React from "react";

export default function Title(props) {
  const { title } = props;
  return (
    <div className="hedding">
      <h2>{title}</h2>
    </div>
  );
}

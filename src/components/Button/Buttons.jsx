import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  const { color, btnName } = props;
  return (
    <div>
      <button className={"btn " + color}>{btnName}</button>
    </div>
  );
}

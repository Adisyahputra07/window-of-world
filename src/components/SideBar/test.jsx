import React from "react";
import SideBar from "./SideBar";

export default function Test() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="c" style={{ width: "100%", border: "5px solid blue" }}></div>
    </div>
  );
}

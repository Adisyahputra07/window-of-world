import React from "react";
import NavbarPages from "../../components/NavbarPages/NavbarPages";

// icon
import pagesbook from "../../assets/pagesbook.svg";

export default function ReadBook() {
  return (
    <div>
      <NavbarPages />
      <div className="containerReadBook shadow" style={{ margin: "50px" }}>
        <img src={pagesbook} alt="" />
      </div>
    </div>
  );
}

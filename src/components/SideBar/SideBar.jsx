import React from "react";
import user from "../../assets/user1.svg";
import iconJumbotron from "../../assets/Icon-jumbotron.png";
import user1 from "../../assets/user1.png";
import bill1 from "../../assets/bill1.png";
import logout1 from "../../assets/logout1.png";
import HomeCss from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div>
      <div className={HomeCss.sideBar}>
        <div className={HomeCss.sideBar1}>
          <div className={HomeCss.iconSideBar}>
            <img src={iconJumbotron} alt="icon-jumbotron" />
            <br />
            <img src={user} alt="user" className={HomeCss.avatar} />
          </div>
          {/* Profile */}
          <div className={HomeCss.titleSideBar}>
            <h1>Egi Ganteng</h1>
            <span>
              <a href="#">Not Subscribed Yet </a>
            </span>
          </div>
        </div>
        <div className={HomeCss.navGroupSideBar}>
          <div className={HomeCss.navLinkSideBar}>
            <img src={user1} alt="user1" />
            <a href="#">Profile</a>
            {/* todo angcor */}
          </div>
          <div className={HomeCss.navLinkSideBar}>
            <img src={bill1} alt="bill1" />
            <a href="#">Subscribe</a>
          </div>
        </div>
        <div className={HomeCss.navLogoutSideBar}>
          <div className={HomeCss.navLinkSideBar}>
            <img src={logout1} alt="logout1" />
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router";

import user from "../../assets/user1.svg";
import iconJumbotron from "../../assets/Icon-jumbotron.png";
import user1 from "../../assets/user1.png";
import bill1 from "../../assets/bill1.png";
import logout1 from "../../assets/logout1.png";
import HomeCss from "./SideBar.module.css";

export default function SideBar() {
  let history = useHistory();

  const handleSubscribe = () => {
    history.push("/subscribe");
  };
  return (
    <div>
      <div className={HomeCss.sideBar}>
        <div className={HomeCss.sideBar1}>
          <div className={HomeCss.iconSideBar}>
            <div onClick={() => history.push("/home")} className="logoIcon">
              <img src={iconJumbotron} alt="icon-jumbotron" />
            </div>
            <div onClick={() => history.push("/profile")} className="iconAvatar">
              <img src={user} alt="user" className={HomeCss.avatar} />
            </div>
          </div>
          {/* Profile */}
          <div className={HomeCss.titleSideBar}>
            <h1>Egi Ganteng</h1>
            <span className="text-danger fw-bold fs-6">Not Subscribed Yet</span>
          </div>
        </div>
        <div className={HomeCss.navGroupSideBar}>
          {/* todo Onclick */}
          <div onClick={() => history.push("/profile")} className={HomeCss.navLinkSideBar}>
            <img src={user1} alt="user1" />
            <span>Profile</span>
          </div>
          <div onClick={() => history.push("/subscribe")} className={HomeCss.navLinkSideBar}>
            <img src={bill1} alt="bill1" />
            <span>Subscribe</span>
          </div>
        </div>
        <div className={HomeCss.navLogoutSideBar}>
          <div onClick={() => history.push("/")} className={HomeCss.navLinkSideBar}>
            <img src={logout1} alt="logout1" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

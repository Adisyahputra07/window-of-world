import React from "react";
import HomeCss from "./Profile.module.css";
import profile from "../../assets/profile.png";
import mail from "../../assets/mail.png";
import map from "../../assets/map.png";
import phone from "../../assets/phone.png";
import gender1 from "../../assets/gender1.png";

// component
import SideBar from "../../components/SideBar/SideBar";
import CardBook from "../../components/Card/Card";

import data from "../../fakeData/bookdate.js";

export default function Profile() {
  return (
    <div>
      <div>
        <div className={HomeCss.homeContainer}>
          <SideBar />
          {/* Jombotron */}
          <div className={HomeCss.sideJombotron}>
            <h1>Profile</h1>
            <div className={HomeCss.jumbotron}>
              <div className={HomeCss.contactUser}>
                <div className={HomeCss.listContact}>
                  <img src={mail} alt="mail" />
                  <div className={HomeCss.iconList}>
                    <p>egigans@gmail.com</p>
                    <span>mail</span>
                  </div>
                </div>
                <div className={HomeCss.listContact}>
                  <img src={gender1} alt="gender" />
                  <div className={HomeCss.iconList}>
                    <p>Male</p>
                    <span>gender</span>
                  </div>
                </div>
                <div className={HomeCss.listContact}>
                  <img src={phone} alt="phone" />
                  <div className={HomeCss.iconList}>
                    <p>0812-8626-8911</p>
                    <span>mobile-phone</span>
                  </div>
                </div>
                <div className={HomeCss.listContact}>
                  <img src={map} alt="map" />
                  <div className={HomeCss.iconList}>
                    <p>Perumahan Permata Bintaro Residence C-3</p>
                    <span>Address</span>
                  </div>
                </div>
              </div>

              {/* avataruser */}
              <div className={HomeCss.avatarUser}>
                <img src={profile} alt="" />
                <button className={HomeCss.btn}>Edit Profile</button>
              </div>
            </div>
            {/* Card */}
            <div className={HomeCss.listCard}>
              <section>
                <div>
                  <div className="row mt-1">
                    <div className="col">
                      <h3 className={HomeCss.titleCard}>List Book</h3>
                    </div>
                  </div>
                  <div className="row">
                    {data.map((item) => (
                      <div class="col-3 mt-2 mb-5">
                        <CardBook data={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

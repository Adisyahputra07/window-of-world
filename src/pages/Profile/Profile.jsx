import React, { useContext } from "react";
import HomeCss from "./Profile.module.css";

// icon image
import profile from "../../assets/profile.png";
import mail from "../../assets/mail.svg";
import map from "../../assets/maps.svg";
import phone from "../../assets/phone.svg";
import gender1 from "../../assets/gender.svg";

// component
import SideBar from "../../components/SideBar/SideBar";
import CardBook from "../../components/Card/Card";

// data
import data from "../../fakeData/bookdate.js";
import { UserContext } from "../../context/userContext";

export default function Profile() {
  const [state, dispatch] = useContext(UserContext);
  console.log(state);

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
                    <p>{state.user.email}</p>
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

              <div>
                <div className={HomeCss.avatarUser}>
                  <div>
                    <img src={profile} alt="" />
                  </div>
                  <button className={HomeCss.btn}>Edit Profile</button>
                </div>
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

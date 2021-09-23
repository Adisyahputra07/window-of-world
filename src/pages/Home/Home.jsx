import React from "react";
import HomeCss from "./Home.module.css";
import jumbotron1 from "../../assets/jumbotron1.png";
import card1 from "../../assets/card1.svg";
import CardBook from "../../components/Card/Card";

// import data
import bookData from "../../fakeData/bookdate.js";

// Component

import SideBar from "../../components/SideBar/SideBar";
import data from "../../fakeData/bookdate.js";

export default function Home() {
  return (
    <div>
      <div className={HomeCss.homeContainer}>
        <SideBar />
        {/* Jombotron */}
        <div className={HomeCss.sideJombotron}>
          <div className={HomeCss.jumbotron}>
            <img src={jumbotron1} alt="jumbotron1" />
          </div>
          {/* Card */}
          <div className={HomeCss.listCard}>
            <section>
              <div className="container">
                <div className="row mt-1">
                  <div className="col">
                    <h3 className={HomeCss.titleCard}>List Book</h3>
                  </div>
                </div>
                <div className="row">
                  {data.map((item) => (
                    <div class="col-3 mt-2 mb-5">
                      <CardBook card={card1} data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

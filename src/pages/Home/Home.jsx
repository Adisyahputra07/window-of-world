import React, { useContext } from "react";
import HomeCss from "./Home.module.css";
import jumbotron1 from "../../assets/jumbotron1.png";

// Component
import SideBar from "../../components/SideBar/SideBar";
import CardBook from "../../components/Card/Card";

// fakedata
import data from "../../fakeData/bookdate.js";

export default function Home() {
  return (
    <div>
      <div className={HomeCss.homeContainer}>
        <SideBar />
        {/* Jombotron */}
        <div className={HomeCss.sideJombotron}>
          <img src={jumbotron1} alt="jumbotron1" width="100%" />
          {/* Card */}
          <div className={HomeCss.listCard}>
            <section>
              <div className="ms-4">
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
  );
}

import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import DetailReadbookCss from "./DetailReadbook.module.css";
//icon
import card1 from "../../assets/card1.svg";
import iconBtnDetail1 from "../../assets/iconBtnDetail1.svg";
import iconBtnDetail2 from "../../assets/iconBtnDetail2.svg";
import imgJumbo from "../../assets/imgJumbo.svg";

export default function DetailReadbook() {
  return (
    <div
      className={DetailReadbookCss.sideDetailBook}
      style={{ marginLeft: "36px", marginRight: "36px", display: "flex" }}
    >
      <SideBar />
      <div
        calssName={DetailReadbookCss.detailContainer}
        style={{
          marginLeft: "3em",
          marginRight: "3em",
          marginTop: "3em",
        }}
      >
        <div className={DetailReadbookCss.descBook}>
          <div className={DetailReadbookCss.imgBook}>
            <img src={imgJumbo} alt="alt" />
          </div>
          <div className={DetailReadbookCss.listDescBook}>
            <div className={DetailReadbookCss.listDesc}>
              <h1 className={DetailReadbookCss.title}>Tess On The Road</h1>
              <span>Rachel Hartman</span>
            </div>
            <div className={DetailReadbookCss.listDesc}>
              <p>Publication date</p>
              <span>April 2020</span>
            </div>
            <div className={DetailReadbookCss.listDesc}>
              <p>Pages</p>
              <span>436</span>
            </div>
            <div className={DetailReadbookCss.listDesc}>
              <p>ISBN</p>
              <span>9781789807554</span>
            </div>
          </div>
        </div>
        <div className={DetailReadbookCss.aboutBook}>
          <h1>About This Book</h1>
          <div className="textBook">
            <p>
              In the medieval kingdom of Goredd, women are expected to be ladies, men are their
              protectors, and dragons get to be whomever they want. Tess, stubbornly, is a
              troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s
              nose with one punch (no matter how pompous he is) and not suffer the consequences. As
              her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a
              journey across the Southlands, alone and pretending to be a boy.
              <br />
              <br />
              Where Tess is headed is a mystery, even to her. So when she runs into an old friend,
              it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her
              both a purpose and protection on the road. But Tess is guarding a troubling secret.
              Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget
              threaten to expose her to the world in more ways than one.
              <br />
              <br />
              Returning to the fascinating world she created in the award-winning and New York Times
              bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new
              quest, pushing the boundaries of genre once again in this wholly original fantasy.
            </p>
          </div>
        </div>

        <div className={DetailReadbookCss.btns}>
          <div
            className="btn p-2 d-flex justify-content-evenly"
            style={{
              border: "2px solid #d60000",
              backgroundColor: "#d60000",
              color: "white",
              borderRadius: "5px",
              width: "162px",
              height: "50px",
              marginBottom: "20px",
              marginRight: "20px",
            }}
          >
            <center>Add My List </center>
            <img src={iconBtnDetail2} alt="add" width="15px" />
          </div>
          <div
            className="btn p-2 d-flex justify-content-evenly"
            style={{
              border: "2px solid #CDCDCD",
              backgroundColor: "#CDCDCD",
              color: "black",
              borderRadius: "5px",
              width: "150px",
              height: "50px",
            }}
          >
            <center>Read Book</center>
            <img src={iconBtnDetail1} alt="add" width="15px" />
          </div>
        </div>
      </div>
    </div>
  );
}

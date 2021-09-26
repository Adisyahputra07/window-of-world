import React, { useContext, useState } from "react";
import "./PageSubscribe.css";
import "bootstrap/dist/css/bootstrap.min.css";

// useContext
import { UserContext } from "../../context/userContext";

// icon
import UploadIcon from "../../assets/UploadIcon.svg";
import wow from "../../assets/wow.png";

//Components
import SideBar from "../../components/SideBar/SideBar";
import { Button, Form } from "react-bootstrap";
import ModalAlert from "../../components/ModalAlert/ModalAlert";

export default function PageSubscribe() {
  const [state, dispatch] = useContext(UserContext);

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div style={{ marginLeft: "36px", marginRight: "36px", display: "flex" }}>
        <SideBar />
        <div className="form-container" style={{ margin: "210px auto" }}>
          <div className="form-header" style={{ textAlign: "center" }}>
            <h1>Premium</h1>
            <span>Pay now and access all the latest books from </span>
            <img src={wow} alt="icon" />
          </div>
          <div className="form-id" style={{ textAlign: "center", marginTop: "30px" }}>
            <img src={wow} alt="icon" />
            <b>: 0981312323</b>
          </div>
          <div style={{ marginTop: "20px", padding: "20px" }}>
            <Form>
              <Form.Group className="mb-4" controlId="ControlInput3">
                <Form.Control
                  // required
                  type="number"
                  placeholder="Input your account number"
                  name="price"
                  className="form-dominant color-dominant"
                  style={{ backgroundColor: "#E5E5E5", border: "1px solid #BCBCBC" }}
                />
              </Form.Group>

              <div
                className="form-dominant color-dominant uploadForm mb-5"
                style={{ border: "1px solid #BCBCBC", color: "#D60000" }}
              >
                <label htmlFor="upload" className="d-flex justify-content-between">
                  <>Attache proof of transfer</>
                  <img src={UploadIcon} alt="upload" width="15px" />
                </label>
                <input required type="file" hidden id="upload" name="photo" />
              </div>
              {/* button */}
              <center>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "SUBSCRIBE",
                    });
                    setModalShow(true);
                  }}
                  className="button-dominant mt-3"
                  type="submit"
                  style={{ backgroundColor: "#D60000", border: "1px solid #D60000" }}
                >
                  Send
                </Button>
              </center>
            </Form>
          </div>
        </div>
      </div>
      <ModalAlert
        show={modalShow}
        hide={() => setModalShow(false)}
        message="Thank you for subscribing to premium, your premium package will be active after our admin approves your transaction, thank you"
        color="
        #29BD11"
      />
    </div>
  );
}

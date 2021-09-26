import React, { useContext, useState } from "react";
import "./ModalSignIn.css";

// usecontext
import { UserContext } from "../../context/userContext";

// components
import { useHistory } from "react-router";
import { Modal, Form, Button } from "react-bootstrap";

export default function ModalSignIn(props) {
  const { show, hide } = props;
  let history = useHistory();

  const [state, dispatch] = useContext(UserContext);
  // get local storage
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  const [item, setItems] = useState({
    email: "",
    password: "",
  });

  const handleOnChanges = (e) => {
    e.preventDefault();
    setItems({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSignIn = (e) => {
    e.preventDefault();
    const userDB = dataUser.filter((data) => {
      if (data.email === item.email && data.password === item.password) {
        return data;
      } else {
        return null;
      }
    });

    console.log(userDB);
    if (userDB.length > 0) {
      localStorage.setItem("dataLogin", JSON.stringify(userDB));
      dispatch({ type: "LOGIN_SUCCESS", payload: userDB[0] });
      history.push(userDB[0].status === "admin" ? "/income-transaction" : "/home");
    } else {
      alert("email or password is wrong");
    }
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={hide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modalSignIn"
      >
        <Modal.Body className="formContainer ">
          <div className="form-header">
            <h1>Sign In</h1>
            <div className="form-body">
              <Form onSubmit={handleOnSignIn}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleOnChanges}
                />
                <br />
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleOnChanges}
                />
                <br />
                <Button type="submit" className="btn-signIn mt-1 mb-4">
                  Sign In
                </Button>
                <div className="text">
                  <p>
                    Don't have an account ? Klik <a href="#">Here</a>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

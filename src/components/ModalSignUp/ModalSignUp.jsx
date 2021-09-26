import React, { useState } from "react";
import { useHistory } from "react-router";
import "./ModalSignUp.css";

// components
import { Modal, Form, Button } from "react-bootstrap";

export default function ModalSignIn(props) {
  const { show, hide } = props;
  // useHistory render
  const history = useHistory();

  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  // state value Input
  const [valueInput, setValueInput] = useState({
    id: Math.floor(Math.random() * 100 + 1),
    email: "",
    password: "",
    fullName: "",
    isSubscribe: false,
  });

  // create Handle Onchange
  const handleOnChanges = (e) => {
    setValueInput({
      ...valueInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dataUser.push(valueInput);
    localStorage.setItem("dataUser", JSON.stringify(dataUser));
    hide();
    setValueInput({
      id: Math.floor(Math.random() * 100 + 1),
      email: "",
      password: "",
      fullName: "",
      isSubscribe: false,
    });
    // todo validasi notif icon success
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={hide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modalSignUp"
      >
        <Modal.Body className="formContainer ">
          <div className="form-header mb-4">
            <h1>Sign Up</h1>
          </div>
          <div className="form-body">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                name="email"
                size="lg"
                type="text"
                placeholder="Email"
                onChange={(e) => handleOnChanges(e)}
              />
              <br />
              <Form.Control
                name="password"
                size="lg"
                type="password"
                placeholder="Password"
                onChange={(e) => handleOnChanges(e)}
              />
              <br />
              <Form.Control
                name="fullName"
                size="lg"
                type="text"
                placeholder="Full Name"
                onChange={(e) => handleOnChanges(e)}
              />
              <br />
              <Button type="submit" className="btn-signUp mt-1 mb-4">
                Sign Up
              </Button>
              <div className="text">
                <p>
                  Already have an account ? Klik <a href={""}>Here</a>
                </p>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

import React from "react";
import "./ModalSignUp.css";

// components
import { Modal, Form, Button } from "react-bootstrap";

export default function ModalSignIn(props) {
  const { show, hide } = props;
  return (
    <div>
      <Modal
        show={show}
        onHide={hide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="form-container" style={{ height: "400px" }}>
          <div className="form-header mb-4">
            <h1>Sign Up</h1>
          </div>
          <div className="form-body">
            <Form>
              <Form.Control size="lg" type="text" placeholder="Email" />
              <br />
              <Form.Control size="lg" type="text" placeholder="Password" />
              <br />
              <Form.Control size="lg" type="text" placeholder="Full Name" />
              <br />
              <Button className="btn-signUp mt-1 mb-4">Sign Up</Button>
              <div className="text">
                <p>
                  Already have an account ? Klik <a href={""}>Here</a>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

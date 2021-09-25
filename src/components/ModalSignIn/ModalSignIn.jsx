import React from "react";
import "./ModalSignIn.css";

// components
import { useHistory } from "react-router";

import { Modal, Form, Button } from "react-bootstrap";

export default function ModalSignIn(props) {
  const { show, hide } = props;
  let history = useHistory();

  const handlePushSignIn = () => {
    history.push("/home");
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
              <Form>
                <Form.Control size="lg" type="text" placeholder="Email" />
                <br />
                <Form.Control size="lg" type="password" placeholder="Password" />
                <br />
                <Button onClick={handlePushSignIn} className="btn-signIn mt-1 mb-4">
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

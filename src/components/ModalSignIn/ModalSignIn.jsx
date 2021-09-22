import React from "react";
import "./ModalSignIn.css";

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
        <div className="form-container">
          <div className="form-header">
            <h1>Sign In</h1>
            <div className="form-body">
              <Form>
                <Form.Control size="lg" type="text" placeholder="Email" />
                <br />
                <Form.Control size="lg" type="password" placeholder="Password" />
                <br />
                <Button className="btn-signIn mt-1 mb-4">Sign In</Button>
                <div className="text">
                  <p>
                    Don't have an account ? Klik <a href={""}>Here</a>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

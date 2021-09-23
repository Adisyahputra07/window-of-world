import React from "react";
import { Modal } from "react-bootstrap";

export default function PopUpAlert(props) {
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
        <p>spanlease make a payment to read the latest books</p>
      </Modal>
    </div>
  );
}

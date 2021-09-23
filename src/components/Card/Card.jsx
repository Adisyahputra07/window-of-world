import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ModalAlert from "../../components/ModalAlert/ModalAlert";

export default function CardBook(props) {
  const [modalShow, setModalShow] = useState(false);

  const { data } = props;

  return (
    <div>
      <div onClick={() => setModalShow(true)}>
        <Card style={{ width: "13em", border: "none" }}>
          <Card.Img variant="top" src={data.image} />
          <Card.Body style={{ marginLeft: "-20px" }}>
            <Card.Title style={{ fontSize: "23px" }}>{data.name}</Card.Title>
            <Card.Text style={{ color: "#929292", fontSize: "18px" }}>{data.writer}</Card.Text>
          </Card.Body>
        </Card>
        <ModalAlert show={modalShow} hide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

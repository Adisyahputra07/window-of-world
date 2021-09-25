import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ModalAlert from "../../components/ModalAlert/ModalAlert";

export default function CardBook(props) {
  const [modalShow, setModalShow] = useState(false);

  const { data } = props;

  return (
    <div>
      <div onClick={() => setModalShow(true)}>
        <Card style={{ width: "13em", border: "none", borderRadius: "12px", height: "25em" }}>
          <Card.Img variant="top" src={data.image} style={{ width: "100%" }} />
          <Card.Body>
            <Card.Title style={{ fontSize: "20px" }}>{data.name}</Card.Title>
            <Card.Text style={{ color: "#929292", fontSize: "15px" }}>{data.writer}</Card.Text>
          </Card.Body>
        </Card>
        <ModalAlert
          show={modalShow}
          hide={() => setModalShow(false)}
          message="please make a payment to read the latest books"
          color="
          #D60000"
        />
      </div>
    </div>
  );
}

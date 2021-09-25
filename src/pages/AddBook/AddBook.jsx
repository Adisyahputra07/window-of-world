import React, { useState } from "react";

// icon
import UploadIcon2 from "../../assets/UploadIcon2.svg";
import iconAddBook from "../../assets/iconAddBook.svg";

// component
import NavbarPages from "../../components/NavbarPages/NavbarPages";
import { Form, Container } from "react-bootstrap";

export default function AddBook() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <NavbarPages />
      <Container className="mt-3">
        <h1 className="mb-5">Add Book</h1>
        <div>
          <Form>
            <Form.Group className="mb-4">
              <Form.Control size="lg" type="text" placeholder="title" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control size="lg" type="text" placeholder="Publication Date" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control size="lg" type="text" placeholder="Pages" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control size="lg" type="text" placeholder="Author" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control size="lg" type="text" placeholder="ISBN" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                placeholder="About This Book"
                as="textarea"
                rows={5}
                style={{ backgroundColor: "#e5e5e5", border: "2px solid #c7c7c7" }}
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Form.Group className="mb-4" style={{ width: "180px" }}>
                <div
                  className=" uploadForm mb-5  d-flex justify-content-between"
                  style={{ border: "2px solid #c7c7c7", backgroundColor: "#e5e5e5" }}
                >
                  <label htmlFor="upload" className=" d-flex justify-content-between">
                    <>Attache Book File</>
                    <img
                      src={UploadIcon2}
                      alt="upload"
                      width="15px"
                      style={{ marginLeft: "7px" }}
                    />
                  </label>
                  <input
                    required
                    type="file"
                    hidden
                    id="upload"
                    name="photo"
                    style={{ color: "#e5e5e5" }}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-4 mt-5 btn" style={{ width: "150px" }}>
                <div
                  className=" p-2 d-flex justify-content-between"
                  style={{
                    border: "2px solid #d60000",
                    backgroundColor: "#d60000",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  <center>Add Book</center>
                  <img src={iconAddBook} alt="add" width="20px" />
                </div>
              </Form.Group>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

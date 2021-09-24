import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCss from "./NavbarPages.module.css";

import icon from "../../assets/icon.png";
import user2 from "../../assets/user2.png";

export default function NavbarPages() {
  return (
    <div>
      <>
        <Navbar bg="light" variant="light" style={{ height: "150px" }}>
          <Container fluid style={{ padding: "30px" }}>
            <Navbar.Brand href="#home">
              <img src={icon} alt="icon" />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <>
                <Dropdown as={Nav.Item} className="ml-3">
                  <Dropdown.Toggle as={Nav.Link}>
                    <img className="" src={user2} alt="user pic" width="50px" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    align="right"
                    style={{
                      left: "-5em",
                    }}
                    className={NavbarCss.dropdownMenu}
                  >
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

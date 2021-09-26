import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCss from "./NavbarPages.module.css";
import { useHistory } from "react-router";

// useContext
import { UserContext } from "../../context/userContext";

import icon from "../../assets/icon.png";
import user2 from "../../assets/user2.png";
import iconAddbook from "../../assets/group1.svg";
import iconLogout from "../../assets/logout1.svg";
import { useContext } from "react";

export default function NavbarPages() {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };

  return (
    <div>
      <>
        <Navbar style={{ height: "150px" }}>
          <Container fluid style={{ padding: "30px" }}>
            <Navbar.Brand onClick={() => history.push("/home")}>
              <img src={icon} alt="icon" />
            </Navbar.Brand>
            <Nav className="ms-auto">
              {state.user.status === "admin" ? (
                <>
                  <Dropdown as={Nav.Item} className="ml-3 d">
                    <Dropdown.Toggle as={Nav.Link} className={NavbarCss.ddToggle}>
                      <img className="" src={user2} alt="user pic" width="50px" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      align="right"
                      style={{
                        left: "-8em",
                        marginTop: "10px",
                        width: "200px",
                      }}
                      className={NavbarCss.dropdownMenu}
                    >
                      <Dropdown.Item
                        onClick={() => history.push("/add-book")}
                        className="d-flex fs-6 fw-bold"
                      >
                        <img
                          src={iconAddbook}
                          alt=""
                          className="me-2 mb-2"
                          style={{
                            width: "25px",
                          }}
                        />
                        <p>Add Book</p>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={handleLogout} className="d-flex fs-6 fw-bold">
                        <img
                          src={iconLogout}
                          alt=""
                          className="me-2 mb-2"
                          style={{
                            width: "25px",
                          }}
                        />
                        <p>Logout</p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : null}
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

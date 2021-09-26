import React from "react";
import incomeCss from "./IncomeTransaction.module.css";
import NavbarPages from "../../components/NavbarPages/NavbarPages";
import { Table, Dropdown } from "react-bootstrap";

// icon
import iconAction from "../../assets/iconAction.svg";

export default function IncomeTransaction() {
  return (
    <div>
      <NavbarPages />
      <Table striped hover className="table-light">
        <thead>
          <tr>
            <th>No</th>
            <th>User</th>
            <th>Bukti Transfer</th>
            <th>Remaining Active</th>
            <th>Status User</th>
            <th>Status Payament</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>Action</td>
            <th>
              <Dropdown>
                <Dropdown.Toggle
                  className={incomeCss.ddToggle}
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                  style={{
                    width: "20px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#1C9CD2",
                  }}
                >
                  <img src={iconAction} alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu className={incomeCss.dropdownAction} variant="light">
                  <Dropdown.Item className="text-success fw-bold"> Approved</Dropdown.Item>
                  <Dropdown.Item className="text-danger fw-bold">Cancel</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>Action</td>
            <td>Action</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

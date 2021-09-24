import React from "react";
import NavbarPages from "../../components/NavbarPages/NavbarPages";
import { Table } from "react-bootstrap";

export default function IncomeTransaction() {
  return (
    <div>
      <NavbarPages />
      <Table striped bordered hover>
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
            <th>Action</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

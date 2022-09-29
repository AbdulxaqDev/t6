import React from "react";
import Table from "react-bootstrap/Table";

export default function Data({ dataNum }) {
 return (
  <Table striped bordered hover variant="dark">
   <thead>
    <tr>
     <th>#</th>
     <th>Random identifier</th>
     <th>Full name</th>
     <th>Address</th>
     <th>Phone number</th>
    </tr>
   </thead>
   <tbody>
    {dataNum.map((data, i) => (
     <tr key={i}>
      <td>{i + 1}</td>
      <td>{data[0]}</td>
      <td>{data[1]}</td>
      <td>{data[2]}</td>
      <td>{data[3].includes("+") ? data[3] : "+" + data[3]}</td>
     </tr>
    ))}
   </tbody>
  </Table>
 );
}

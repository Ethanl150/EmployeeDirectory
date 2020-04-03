import React from "react";
import "./TableRow.css"

function TableRow(props) {
    return (
      <tr>
        <td><img src={props.image} alt={props.name}/></td>
        <td>{props.name}</td>
        <td>{props.number}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>
    );
}

export default TableRow;

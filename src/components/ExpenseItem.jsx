import React from "react";
import { TiDelete } from "react-icons/ti";

export const ExpenseItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge rounded-pill bg-primary">${props.cost}</span>
        <TiDelete size="1.5em" />
      </div>
    </li>
  );
};

import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseList = () => {
  const expenses = [
    { id: 1, name: "shopping", cost: 500 },
    { id: 2, name: "transport", cost: 400 },
    { id: 3, name: "hotel", cost: 500 },
    { id: 4, name: "food", cost: 300 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

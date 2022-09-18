import React, { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";

export const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [editing, setEditing] = useState(false);
  const [display, setDisplay] = useState(<span>Budget: ${budget}</span>);
  const [newBudget, setNewBudget] = useState();

  const onSubmit = (event) => {
    event.preventDefault();

    if (!editing) {
      dispatch({
        type: "CHANGE_BUDGET",
        payload: newBudget,
      });
    }

    setNewBudget();
  };

  const budgetDisplay = () => {
    setEditing(!editing);
    if (!editing) {
      setDisplay(
        <input
          type={"number"}
          className="form-control me-5"
          value={newBudget}
          onChange={(event) => setNewBudget(event.target.value)}
        ></input>
      );
    } else {
      setDisplay(<span>Budget: ${newBudget}</span>);
    }
  };

  return (
    <div className="alert alert-secondary d-flex align-items-center">
      {display}
      <form className="ms-auto" onSubmit={onSubmit}>
        <button
          className="btn btn-primary ms-auto"
          onClick={() => budgetDisplay()}
        >
          {!editing ? "Edit" : "Save"}
        </button>
      </form>
    </div>
  );
};

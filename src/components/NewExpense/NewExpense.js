import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    setIsEditing(false);
    //passing in the data and adding an ID
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //calling parent function with the converted data
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHander = () => {
    setIsEditing(false);
  };

  //when the button is clicked the form should be shown, and when the submit button is clicked or canceled the button should be shown
  //we need to register a new state here
  //by setting state to false we can render the component conditionally
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHander}
        />
      )}
    </div>
  );
};

export default NewExpense;

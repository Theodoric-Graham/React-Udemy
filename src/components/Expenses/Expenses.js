import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

//can destructure to clean things up
const Expenses = ({ items }) => {
  const [enteredDate, setEnteredDate] = useState("2020");

  const onSaveExpenseYearHandler = (year) => {
    setEnteredDate(year);
  };

  //filter returns a brand new array
  const filteredExpenses = items.filter((item) => {
    //will return true if the year stored in the date is the same selected in the filter
    //gets the full year from the date object, converts it to a string, then compares it with the entered date
    return item.date.getFullYear().toString() === enteredDate;
  });

  //conditionally checking if the filtered expenses have data
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveExpenseYear={onSaveExpenseYearHandler}
          selected={enteredDate}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

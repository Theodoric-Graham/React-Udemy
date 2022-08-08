import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

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

  const renderCards = () => {
    return filteredExpenses.map((expenseItem) => {
      //react renders the new item as the last item, then updates all items and
      //replaces their content so that it matches the order of the items in the array
      //always use a key when mapping a list of items
      return (
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      );
    });
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveExpenseYear={onSaveExpenseYearHandler}
          selected={enteredDate}
        />
        {renderCards()}
      </Card>
    </div>
  );
};

export default Expenses;

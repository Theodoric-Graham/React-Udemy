import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

//can destructure to clean things up
const Expenses = ({ items }) => {
  const [enteredDate, setEnteredDate] = useState("2020");

  const onSaveExpenseYearHandler = (data) => {
    console.log(data);
    setEnteredDate(data);
  };

  const renderCards = () => {
    return items.map((expenseItem) => {
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

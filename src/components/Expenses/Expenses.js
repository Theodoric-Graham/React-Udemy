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

  // const renderCards = () => {
  //   return items.map((expenseItem, index) => {
  //     return (
  //       <ExpenseItem
  //         key={index}
  //         index={index}
  //         title={expenseItem.title}
  //         amount={expenseItem.amount}
  //         date={expenseItem.date}
  //       />
  //     );
  //   });
  // };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveExpenseYear={onSaveExpenseYearHandler}
          selected={enteredDate}
        />
        {items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

//can destructure to clean things up
const Expenses = ({ items }) => {
  console.log(items);
  const renderCards = () => {
    return items.map((expenseItem, index) => {
      return (
        <ExpenseItem
          key={index}
          index={index}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      );
    });
  };
  return <Card className="expenses">{renderCards()}</Card>;
};

export default Expenses;

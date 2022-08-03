import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ index, date, title, amount }) => {
  const clickHandler = () => {
    title = "Updated!";
    console.log(title);
  };
  const oddEven = `expense-item ${index % 2 === 0 ? "even" : "odd"}`;

  //you can only have one root element here per return statement, per JSX code snippet
  //we dont need to call 'clickHandler' we just need to point at it, regardless of how its defined
  return (
    <Card className={oddEven}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

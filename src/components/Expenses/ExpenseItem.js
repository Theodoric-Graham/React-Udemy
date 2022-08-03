import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ index, date, title, amount }) => {
  //react hook, we need an initial value in this case 'title', a variable is
  //created, useState returns the variable and a function that you can call to
  //assign a new value to that variable, as an array where the first value is
  //the variable itself, and the second is the updating function
  const [titleValue, setTitleValue] = useState(title);
  console.log("ExpenseItem evaluated by React");

  //when we call the state update function, the component function will be executed again
  //state is on a per component instance basis
  const clickHandler = () => {
    setTitleValue("Updated!");
    console.log(titleValue);
  };
  const oddEven = `expense-item ${index % 2 === 0 ? "even" : "odd"}`;

  //you can only have one root element here per return statement, per JSX code snippet
  //we dont need to call 'clickHandler' we just need to point at it, regardless of how its defined
  return (
    <Card className={oddEven}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleValue}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const renderCards = () => {
    return props.items.map((expenseItem, index) => {
      //react renders the new item as the last item, then updates all items and
      //replaces their content so that it matches the order of the items in the array
      //this is not good
      //always use a key when mapping a list of items
      return (
        <ExpenseItem
          index={index}
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      );
    });
  };

  //can assign html to a variable
  // let expensesContent = <p>No expenses found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return <ul className="expenses-list">{renderCards()}</ul>;
};

export default ExpensesList;

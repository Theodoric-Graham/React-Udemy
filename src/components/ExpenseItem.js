import "./ExpenseItem.css";

function ExpenseItem(props) {
  console.log(props);

  //you can only have one root element here per return statement, per JSX code snippet
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

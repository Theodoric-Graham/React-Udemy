import "./ExpenseItem.css";

function ExpenseItem() {
  //you can only have one root element here per return statement, per JSX code snippet
  return (
    <div className="expense-item">
      <div>July 24th, 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

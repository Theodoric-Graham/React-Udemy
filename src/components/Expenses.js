import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

//can destructure to clean things up
function Expenses({ items }) {
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
  return <div className="expenses">{renderCards()}</div>;
}

export default Expenses;

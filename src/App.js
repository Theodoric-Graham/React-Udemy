import ExpenseItem from "./components/ExpenseItem";

//our own custom components must start with a capital letter when in JSX so
//react can detect it as a custom component
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

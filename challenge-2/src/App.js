import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function decreaseStep() {
    setStep((s) => s - 1);
  }

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseCount() {
    setCount((c) => c - step);
  }

  function increaseCount() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <button onClick={decreaseStep}>-</button>
      <p>Step: {step}</p>
      <button onClick={increaseStep}>+</button>
      <br></br>
      <button onClick={decreaseCount}>-</button>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>+</button>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

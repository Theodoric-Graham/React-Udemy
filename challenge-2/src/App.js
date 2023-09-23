import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

function Count() {
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("en-US", DATE_OPTIONS);

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [curDate, setCurDate] = useState(date);

  function decreaseStep() {
    if (step > 0) setStep((s) => s - 1);
  }

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseCount() {
    if (count > 0) setCount((c) => c - 1);
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
        {count} days from today is {curDate}
      </p>
    </div>
  );
}

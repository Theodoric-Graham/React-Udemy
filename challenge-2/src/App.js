import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Step />
      <Count />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(0);

  function decreaseStep() {
    if (step > 0) setStep((s) => s - 1);
  }

  function increaseStep() {
    setStep((s) => s + 1);
  }

  return (
    <div>
      <button onClick={decreaseStep}>-</button>
      <p>Step: {step}</p>
      <button onClick={increaseStep}>+</button>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);

  function decreaseCount() {
    if (count > 0) setCount((c) => c - 1);
  }

  function increaseCount() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

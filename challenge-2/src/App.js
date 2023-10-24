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

  // function decreaseStep() {
  //   setStep((s) => s - 1);
  // }

  // function increaseStep() {
  //   setStep((s) => s + 1);
  // }

  function decreaseCount() {
    setCount((c) => c - step);
  }

  function increaseCount() {
    setCount((c) => c + step);
  }

  function sliderCallback(e) {
    setStep(+e.target.value);
  }

  function inputHandler(e) {
    setCount(+e.target.value);
  }

  function resetHandler() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="container">
      <div className="slider">
        <input
          onChange={sliderCallback}
          type="range"
          min="0"
          max="10"
          value={step}
        ></input>
        <label>{step}</label>
      </div>

      <div className="count">
        {/* <button onClick={decreaseStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={increaseStep}>+</button>
        <br></br> */}
        <button onClick={decreaseCount}>-</button>
        <input onChange={inputHandler} type="number" value={count}></input>
        <button onClick={increaseCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={resetHandler}>Reset</button>
      ) : (
        ""
      )}
    </div>
  );
}

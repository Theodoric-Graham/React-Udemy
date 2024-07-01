import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Bill />
      <Service />
      <FriendService />
      <Total />
    </div>
  );
}

function Bill() {
  return (
    <div>
      <p>How much was the bill?</p>
      <input></input>
    </div>
  );
}

function Service() {
  return (
    <div>
      <p>How did you like the service?</p>
      <label for="service-select"></label>
      <select name="pets" id="service-select">
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function FriendService() {
  return (
    <div>
      <p>How did your friend like the service?</p>
      <label for="service-select"></label>
      <select name="pets" id="service-select">
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total() {
  return (
    <div>
      <h2>You pay $x</h2>
    </div>
  );
}

export default App;

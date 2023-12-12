//need to import
import { useState } from "react";

//initial object we want to work with
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  // { id: 4, description: "Laptop", quantity: 1, packed: true },
  // { id: 5, description: "Wallet", quantity: 1, packed: false },
  // { id: 6, description: "Keys", quantity: 1, packed: false },
  // { id: 7, description: "Phone", quantity: 1, packed: true },
  // { id: 8, description: "Mouse", quantity: 1, packed: true },
  // { id: 9, description: "Keyboard", quantity: 1, packed: true },
  // { id: 10, description: "Mouse Pad", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);
  // const [data, setData] = useState([]);

  //spread existing items and add new one
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // function handleAddData(data) {
  //   setItems((newData) => [...newData, data]);
  // }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <NewList />
      <SecondList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onAddItems }) {
  //state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //callback function
  function handleSubmit(e) {
    e.preventDefault();

    //clause
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    //prop name
    onAddItems(newItem);

    //CLEAR INPUT
    setDescription("");
    //reset
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip??</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%) </em>
    </footer>
  );
}

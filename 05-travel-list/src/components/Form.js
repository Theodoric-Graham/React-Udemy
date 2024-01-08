import { useState } from "react";

export default function Form({ onAddItems }) {
  //state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //callback function
  function handleSubmit(e) {
    e.preventDefault();

    //clause
    if (!description) return;

    //setting id to date to avoid error
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

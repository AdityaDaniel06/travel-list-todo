import { useState } from 'react';
import './App.css';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />

      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴🥥My Travel App 🎒</h1>;
}

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; // not ot submit empty value
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // re-initialize value after submitting data
    setDescription('');
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need?</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Add item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item }) {
  return (
    <>
      <li>
        <span
          style={
            item.packed
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <p>You have X items already packed</p>
    </footer>
  );
}
export default App;

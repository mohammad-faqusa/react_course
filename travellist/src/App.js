import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌳 Far Away 🧁</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your trip ?</h3>
    </div>
  );
}

function PackageList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
    </li>
  );
}

function Stats() {
  return (
    <footer>
      <em>You have x items on your list, and you already packed x</em>
    </footer>
  );
}

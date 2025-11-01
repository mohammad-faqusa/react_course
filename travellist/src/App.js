import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState([...initialItems]);

  function handleAddItem(item) {
    setItems((l) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((l) => l.filter((e) => e.id !== id));
  }

  function handleToggleItem(id) {
    setItems((l) =>
      l.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e))
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("are you sure to delete the items ? ");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

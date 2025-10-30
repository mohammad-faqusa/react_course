import "./index.css";

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
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer>
      <em>You have x items on your list, and you already packed x</em>
    </footer>
  );
}

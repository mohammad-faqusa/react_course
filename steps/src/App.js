import "./index.css";

const messages = [
  "learn react * ",
  "Apply for jobs",
  "Invest your new income ",
];

function handlePrevious() {
  alert();
}

function handleNext() {
  alert();
}

function App() {
  const stepNum = 3;
  return (
    <div className="steps">
      <div className="numbers">
        <div className={stepNum >= 1 ? "active" : ""}>1</div>
        <div className={stepNum >= 2 ? "active" : ""}>2</div>
        <div className={stepNum >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">{messages[0]} </p>

      <div className="buttons">
        <button
          onClick={handlePrevious}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./index.css";

const messages = [
  "learn react * ",
  "Apply for jobs",
  "Invest your new income ",
];

function App() {
  const [stepNum, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  function handlePrevious() {
    if (stepNum > 1) setStep((n) => n - 1);
  }

  function handleNext() {
    if (stepNum < 3) {
      setStep((n) => n + 1);
      // setStep((n) => n + 1);
    }
  }
  return (
    <>
      {/* <button onClick={setOpen(!isOpen)}>x</button> */}
      <button
        onClick={() => {
          setOpen(!isOpen);
          setStep(1);
        }}
      >
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={stepNum >= 1 ? "active" : ""}>1</div>
            <div className={stepNum >= 2 ? "active" : ""}>2</div>
            <div className={stepNum >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">{messages[stepNum - 1]} </p>

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
      )}
    </>
  );
}

export default App;

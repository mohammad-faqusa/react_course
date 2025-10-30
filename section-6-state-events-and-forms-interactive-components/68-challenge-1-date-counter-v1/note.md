## 68. CHALLENGE #1: Date Counter (v1)

#### the process

1. step , count
2. when increate the count, it display how many days after the count
3. go to sandbox
4. write Counter function , and print the counter

#### the solution

```javascript
import { useState } from "react";
import "./styles.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);
  const date = new Date();

  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setCount((n) => n - step)}>{"<"}</button>
        <span>Count = {count}</span>
        <button onClick={() => setCount((n) => n + step)}>{">"}</button>
      </div>
      <div>
        <button onClick={() => setStep((n) => n - 1)}>{"<"}</button>
        <span>Step = {step}</span>
        <button onClick={() => setStep((n) => n + 1)}>{">"}</button>
      </div>

      <p>{date.toDateString()}</p>
    </>
  );
}
```

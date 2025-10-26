## 2. Building Our First React App!

#### the process 
1. open sandbox 
2. on browser write `react.new`
3. start writing on App.js 
   * it willl return h1 , button 
4. load the page 
5. write async function 
   * fetch advice : [https://api.adviceslip.com/advice]
```javascript
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data); 
```
6. button onClick `onClick={getAdvice}`
7. import useState 
8. useEffect 

the final code : 
```javascript 
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    console.log(data.setup);
    setAdvice(data.setup);
    setCount((n) => n + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Message count={count} />
      <button onClick={getAdvice}>click me</button>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      you have read <strong>{props.count}</strong> peices of advices
    </p>
  );
}
```

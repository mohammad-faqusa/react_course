## 92. EXERCISE #2: Accordion Component (v2)

#### the process

1. move up the isOpen state to the parent component
2. replace the text, to child body

```javascript
import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [currOpen, setOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordingItem
          num={i}
          title={faq.title}
          key={faq.title}
          currOpen={currOpen}
          setOpen={setOpen}
        >
          {faq.text}
        </AccordingItem>
      ))}
    </div>
  );
}

function AccordingItem({ currOpen, setOpen, num, title, text, children }) {
  const isOpen = currOpen === num;
  return (
    <div
      className={`item ${isOpen && "open"}`}
      onClick={() => setOpen(isOpen ? null : num)}
    >
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">-</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
```

## 89. EXERCISE #1: Accordion Component (v1)

#### the process

1. AccordingItem(num , title, text)
   1. div , item
   2. p number
   3. p text, title
   4. p icon , -
   5. div content-box, text
2. pass data to accrodian
   1. map the entries , with indexed
3. create variable `isOpen`
4. add `handleToggle`
5. is class "open" to the div if opened

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
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordingItem
          num={i}
          title={faq.title}
          text={faq.text}
          key={faq.title}
        />
      ))}
    </div>
  );
}

function AccordingItem({ num, title, text }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`item ${isOpen && "open"}`}
      onClick={() => setOpen(!isOpen)}
    >
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">-</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
```

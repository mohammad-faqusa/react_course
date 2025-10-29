## 55. CHALLENGE #2: Profile Card (v2)

#### solution :

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar image="https://i1.rgstatic.net/ii/profile.image/1143158268276737-1649561578545_Q512/Mohammad-Faqusa.jpg" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.image} />;
}

function Intro() {
  return (
    <div>
      <h1>Mohammad Faqusa</h1>
      <p>
        A computer enginner student, has skills in web development
        <br /> build full stack applications for IoT systems
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((i) => (
        <Skill skill={i} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      {skill.skill +
        " " +
        (skill.level == "advanced"
          ? "💪"
          : skill.level == "intermediate"
          ? "👍"
          : "👶")}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
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

function Avatar() {
  return <img className="avatar" src="./theo.jpg" />;
}

function Intro() {
  return (
    <div>
      <h1>Theodoric Graham</h1>
      <p>
        Full stack developer with a drive to build eye popping web pages and a
        focus on UI/UX design. Strong understanding in design best practices
        when creating responsive web pages. Passionate and driven to learn new
        technologies and create web pages that focus on user experience and
        design.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="REACT" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

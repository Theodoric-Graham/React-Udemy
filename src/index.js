//index.js is the first file to be executed here
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//createRoot creates the main entry point
const root = ReactDOM.createRoot(document.getElementById("root"));
//call the render method to say what should be rendered, in this case App
//JSX(Javascript XML) syntax, App is a component, that will be rendered on the root
root.render(<App />);

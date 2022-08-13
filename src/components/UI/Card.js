import React from "react";
import "./Card.css";

//Used to set similar styling to multiple components
const Card = (props) => {
  const classes = "card " + props.className;
  // we dont set children, the value of children will always be the content
  // between the opening and closing tags of your custom component
  return <div className={classes}>{props.children}</div>;
};

export default Card;

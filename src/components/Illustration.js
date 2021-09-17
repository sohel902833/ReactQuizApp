import React from "react";
import img from "../images/signup.svg";
import classes from "../styles/Illustration.module.css";
const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={img} alt="Signup" />
    </div>
  );
};
export default Illustration;

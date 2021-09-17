import React from "react";
import classes from "../styles/Question.module.css";
import Answers from "./Answers";
const Questions = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div class={classes.question} key={index}>
      <div class={classes.qtitle}>
        <span class="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
};

export default Questions;

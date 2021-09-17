import React, { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";
const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={`${classes.answers}`}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <CheckBox
              type="checkbox"
              key={index}
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <CheckBox
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              type="checkbox"
              key={index}
              text={option.title}
              value={index}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;

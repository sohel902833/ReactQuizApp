import React, { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
const ProgressBar = ({ submit, next, prev, progress }) => {
  const tooltipRef = useRef(null);
  const [toolTip, settoolTip] = useState(false);
  function toogleTooltip() {
    if (toolTip) {
      settoolTip(false);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "none";
    } else {
      settoolTip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className={classes.progressBar}>
      <div onClick={prev} className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div ref={tooltipRef} className={classes.tooltip}>
          {progress}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            onMouseOut={toogleTooltip}
            onMouseOver={toogleTooltip}
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button
        onClick={progress === 100 ? submit : next}
        className={classes.next}
      >
        <span>{progress === 100 ? "Submit" : ">Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;

import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CircularProgress.css";
function CircularProgress({done, ordered, max, variant}) {

  // const ordered = 2968;
  const DonePercentage = (Math.ceil((done * 100) / ordered));
  const OrderedPercentage = (Math.ceil((ordered * 100) / max));
  if(variant === "done"){
      return (
        <div className="circular-progress">
          <CircularProgressbarWithChildren
            value={DonePercentage}
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "15px",
              pathColor: `rgba(3, 154, 251)`,
              textColor: "#000000",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          >
            <p className="circular-progress-percentage">{DonePercentage}%</p>
            <p className="circular-progress-text">
              {done}/{ordered}
            </p>
          </CircularProgressbarWithChildren>
        </div>
      );
  }else{
    return (
      <div className="circular-progress">
        <CircularProgressbarWithChildren
          value={OrderedPercentage}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "15px",
            pathColor: "#b459ff",
            textColor: "#000000",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        >
          <p className="circular-progress-percentage">{OrderedPercentage}%</p>
          <p className="circular-progress-text">
            {ordered}/{max}
          </p>
        </CircularProgressbarWithChildren>
      </div>
    );
  }


}

export default CircularProgress;

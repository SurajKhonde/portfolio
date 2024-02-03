import React, { useState } from "react";
const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"2rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
      >
      {percentage.toFixed(0)}%
    </text>
  );
};
const TextCont = ({ skill}) => { 
  return (
    <text
      color="Red"
      x="50%"
      y="60%"
      dominantBaseline="up"
      textAnchor="middle"
      fontSize={"1.5rem"} >{skill}  </text>
  )
}

const Bar = ({ percentage, colour,texo}) => {
  const pct = cleanPercentage(percentage);
  const [skill, setskill] = useState("HTML");
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" />
        <Circle colour={colour} pct={pct} />
      </g>
      <Text percentage={pct} />
      <TextCont skill={texo } />
    </svg>
  );
};

export default Bar;

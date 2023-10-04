import React from "react";
import style from "./style.module.css";

export default function AxisY() {
  return (
    <g data-y-axis="true">
      <text
        x="-0.8"
        y="0"
        font-size=".8"
        className={style.text}
        dominant-baseline="middle"
        text-anchor="end"
      >
        0
      </text>
      <text
        x="-0.8"
        y="5"
        font-size=".8"
        className={style.text}
        dominant-baseline="middle"
        text-anchor="end"
      >
        5
      </text>
      <text
        x="-0.8"
        y="10"
        font-size=".8"
        className={style.text}
        dominant-baseline="middle"
        text-anchor="end"
      >
        10
      </text>
      <text
        x="-0.8"
        y="15"
        font-size=".8"
        className={style.text}
        dominant-baseline="middle"
        text-anchor="end"
      >
        15
      </text>
      <text
        x="-0.8"
        y="20"
        font-size=".8"
        className={style.text}
        dominant-baseline="middle"
        text-anchor="end"
      >
        20
      </text>
    </g>
  );
}

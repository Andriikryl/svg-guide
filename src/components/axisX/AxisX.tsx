import React from "react";
import style from "./style.module.css";
export default function AxisX() {
  return (
    <>
      <g data-x-axis="true">
        <text
          y="-0.8"
          x="0"
          font-size=".8"
          className={style.text}
          text-anchor="middle"
        >
          0
        </text>
        <text
          y="-0.8"
          x="5"
          font-size=".8"
          className={style.text}
          text-anchor="middle"
        >
          5
        </text>
        <text
          y="-0.8"
          x="10"
          font-size=".8"
          className={style.text}
          text-anchor="middle"
        >
          10
        </text>
        <text
          y="-0.8"
          x="15"
          font-size=".8"
          className={style.text}
          text-anchor="middle"
        >
          15
        </text>
        <text
          y="-0.8"
          x="20"
          font-size=".8"
          className={style.text}
          text-anchor="middle"
        >
          20
        </text>
      </g>
    </>
  );
}

import React from "react";
import style from "./style.module.css";

interface CircleDesProps {
  cx: number;
  cy: number;
}

export default function CircleDes({ cx, cy }: CircleDesProps) {
  return (
    <circle
      className={style.cicel}
      stroke-width="0.12"
      r=".4"
      cx={cx}
      cy={cy}
      data-projection-id="199"
    ></circle>
  );
}

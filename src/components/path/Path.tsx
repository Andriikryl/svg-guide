"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { MainField } from "@/components/mainField/MainField";
import { InputFrame } from "@/components/inputFrame/InputFrame";
export default function Path() {
  const [x1, setX1] = useState(100);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(400);
  const [y2, setY2] = useState(800);
  return (
    <section className={style.line}>
      <Container>
        <h4 className={style.line__title}>path</h4>
        <p className={style.path__description}>
          The SVG path element is a generic element to define any kind of shape.
          The d attribute takes a series of path commands that define the shape.
        </p>
        <MainField className={style.line__box}>
          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <path
              d={`M 50 400 Q ${x1} ${y1} 250 400 Q ${x2} ${y2} 550 400 Q {x3}, {y3} 750 400`}
              fill="none"
              stroke="#CCDB70"
              stroke-width="23"
            />
          </svg>
        </MainField>
        <InputFrame value={x1} set={setX1} min={0} max={800}>
          control point 1 X
        </InputFrame>
        <InputFrame value={x2} set={setX2} min={0} max={800}>
          control point 1 Y
        </InputFrame>
        <InputFrame value={y1} set={setY1} min={0} max={800}>
          control point 2 X
        </InputFrame>
        <InputFrame value={y2} set={setY2} min={0} max={800}>
          control point 2 Y
        </InputFrame>

        <p className={style.code__box}>
          d=&quot;M 50 400 Q<span className={style.code__style}>{x1}</span> ;
          <span className={style.code__style}>{y1}</span> 250 400 Q{" "}
          <span className={style.code__style}>{x2}</span>{" "}
          <span className={style.code__style}>{x2}</span> 550 400&quot;
        </p>
      </Container>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import { MainField } from "@/components/mainField/MainField";
import { InputFrame } from "@/components/inputFrame/InputFrame";
import clsx from "clsx";
export default function Path() {
  const [x1, setX1] = useState(100);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(400);
  const [y2, setY2] = useState(800);
  const [move, setMove] = useState("");
  const [moveC, setMoveC] = useState("");
  const [moveCt, setMoveCt] = useState("");
  const [line, setLine] = useState("");
  const [lineT, setLineT] = useState("");
  const [cubic, setCubic] = useState("");
  const [cubicC, setCubicC] = useState("");
  const [z, setZ] = useState("");

  const handleButtonClick = () => {
    const newDValue = `
    M 12.0 7.2
    `;
    setMove(newDValue);
  };
  const handleButtonClickMoveC = () => {
    const newDValueC = `
    C 10.5 5.6 8.1 5.2 6.3 6.7
    `;
    setMoveC(newDValueC);
  };
  const handleButtonClickMoveCt = () => {
    const newDValueCt = `
    C 4.5 8.1 4.2 10.6 5.7 12.4
    `;
    setMoveCt(newDValueCt);
  };
  const handleButtonClickLine = () => {
    const newDValueLine = `
    L 12.0 18.3
    `;
    setLine(newDValueLine);
  };
  const handleButtonClickLineT = () => {
    const newDValueLineT = `
    L 18.3 12.4
    `;
    setLineT(newDValueLineT);
  };
  const handleButtonCubic = () => {
    const newDValueCubic = `
    C 19.7 10.6 19.5 8.1 17.7 6.7
    `;
    setCubic(newDValueCubic);
  };
  const handleButtonCubicC = () => {
    const newDValueCubicC = `
    C 15.8 5.2 13.4 5.6 12.0 7.2
    `;
    setCubicC(newDValueCubicC);
  };
  const handleButtonZ = () => {
    const newDValueZ = `
    z
    `;
    setZ(newDValueZ);
  };
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
        <div className={style.description__box}>
          <p className={style.path__description}>
            The d attribute is actually a series of commands that tell the
            browser how the path should be drawn.
          </p>
        </div>
        <div className={style.flex__group}>
          <MainField className={style.line__boxPath}>
            <svg
              width="auto"
              height="100%"
              viewBox="-1.7500000000000002 -1.7500000000000002 27.625 27.625"
            >
              <path
                className={style.path}
                stroke-width="0.3125"
                d={`
                ${move}
                ${moveC}
                ${moveCt}
                ${line}
                ${lineT}
                ${cubic}
                ${cubicC}
                `}
              ></path>
            </svg>
          </MainField>
          <div className={style.button__group}>
            <button
              className={clsx(style.button)}
              onClick={() => {
                handleButtonClick();
              }}
            >
              <span>M 12.0 7.2 </span>{" "}
              <span className={style.button__description}>move</span>
            </button>
            <button
              className={clsx(style.button)}
              onClick={handleButtonClickMoveC}
            >
              <span>C 10.5 5.6 8.1 5.2 6.3 6.7</span>
              <span className={style.button__description}>cubic curve</span>
            </button>
            <button
              className={clsx(style.button)}
              onClick={handleButtonClickMoveCt}
            >
              <span>C 4.5 8.1 4.2 10.6 5.7 12.4</span>
              <span className={style.button__description}>cubic curve</span>
            </button>
            <button
              className={clsx(style.button)}
              onClick={handleButtonClickLine}
            >
              <span>L 12.0 18.3</span>
              <span className={style.button__description}>line</span>
            </button>
            <button
              className={clsx(style.button)}
              onClick={handleButtonClickLineT}
            >
              <span>L 18.3 12.4</span>
              <span className={style.button__description}>line</span>
            </button>
            <button className={clsx(style.button)} onClick={handleButtonCubic}>
              <span>C 19.7 10.6 19.5 8.1 17.7 6.7</span>
              <span className={style.button__description}>cubic curve</span>
            </button>
            <button className={clsx(style.button)} onClick={handleButtonCubicC}>
              <span>C 15.8 5.2 13.4 5.6 12.0 7.2</span>
              <span className={style.button__description}>cubic curve</span>
            </button>
            <button className={clsx(style.button)} onClick={handleButtonZ}>
              <span>z</span>
              <span className={style.button__description}>close path</span>
            </button>
          </div>
        </div>
        <div className={style.description__box}>
          <p className={style.path__description}>
            All path commands follow the same basic syntax — a single-letter
            code followed by a series of numbers. The letter code identifies the
            command type, while the numbers act as the commands parameters.
          </p>
        </div>
      </Container>
    </section>
  );
}

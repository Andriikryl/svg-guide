"use client";
import React, { useState } from "react";
import { Container } from "../container/Container";
import { MainField } from "../mainField/MainField";
import style from "./style.module.css";
import { InputFrame } from "../inputFrame/InputFrame";
export default function Transform() {
  const [rotate, setRotate] = useState(45);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [scale, setScale] = useState(1);
  return (
    <section className={style.transform}>
      <Container>
        <h4 className={style.transform__title}>transform</h4>
        <MainField className={style.transform__box}>
          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <rect
              transform={`translate(${translateX} ${translateY}) rotate(${rotate}) skewX(${skewX}) skewY(${skewY}) scale(${scale})`}
              transform-origin="384 290"
              x="200"
              y="200"
              width="400"
              height="400"
              fill="#444BEA"
            ></rect>
          </svg>
        </MainField>
        <div>
          <InputFrame value={rotate} set={setRotate} min={0} max={360}>
            point 1 X
          </InputFrame>
          <InputFrame value={skewX} set={setSkewX} min={0} max={360}>
            SkewX
          </InputFrame>
          <InputFrame value={skewY} set={setSkewY} min={0} max={360}>
            SkewY
          </InputFrame>
          <InputFrame value={translateX} set={setTranslateX} min={0} max={360}>
            translate X
          </InputFrame>
          <InputFrame value={translateY} set={setTranslateY} min={0} max={360}>
            translate Y
          </InputFrame>
          <InputFrame value={scale} set={setScale} min={0.25} max={2.95}>
            scale
          </InputFrame>
        </div>
      </Container>
    </section>
  );
}

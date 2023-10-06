import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { MainField } from "../mainField/MainField";
import Bezier from "../bezier/Bezier";
const startPoint = [25, 25];
const controlPoint = [300, 175];
const endPoint = [25, 325];
const path = (
  <path
    d={`
  M ${startPoint}
  Q ${controlPoint} ${endPoint}
`}
    fill="none"
    stroke="hotpink"
    strokeWidth={5}
  />
);
export default function Curves() {
  return (
    <section className={style.curves}>
      <Container>
        <h4 className={style.curves__title}>Curves</h4>
        <MainField className={style.box}>
          <svg viewBox="0 0 200 350">{path}</svg>
        </MainField>
        <MainField className={style.box}>
          <Bezier viewBoxWidth={250} viewBoxHeight={250} />
        </MainField>
      </Container>
    </section>
  );
}

import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { MainField } from "../mainField/MainField";
import AxisX from "../axisX/AxisX";
import AxisY from "../axisY/AxisY";
import CircleDes from "../cirecleDes/CircleDes";
export default function MultiLine() {
  return (
    <section className={style.multiline}>
      <Container>
        <h4 className={style.multiline__tilte}>Multi line</h4>
        <p className={style.description}>
          H draws a horizontal line while V draws a vertical line:
        </p>
        <MainField className={style.box}>
          <svg viewBox="-1.7500000000000002 -1.7500000000000002 22.625 22.625">
            <AxisX />
            <AxisY />
            <path
              className={style.path}
              fill="none"
              stroke="#fcf6bd"
              stroke-width=".24"
              d="
              M
              13.0
              5.0
              h
              -6.0
              V
              15.0
              H
              13.0
              M
              7.0
              10.0
              h
              4.0
              
            "
            />
            <CircleDes cx={7} cy={5} />
            <CircleDes cx={12.8} cy={5} />
            <CircleDes cx={7} cy={10} />
            <CircleDes cx={11} cy={10} />
            <CircleDes cx={7} cy={15} />
            <CircleDes cx={12.8} cy={15} />
          </svg>
        </MainField>
        <code className={style.code__box}>
          <span className={style.code__item}>M 13.0 5.0</span>
          <span className={style.code__item}>h -6.0</span>
          <span className={style.code__item}>V 15.0</span>
          <span className={style.code__item}>H 13.0</span>
          <span className={style.code__item}>M 7.0 10.0</span>
          <span className={style.code__item}>h 4.0</span>
        </code>
      </Container>
    </section>
  );
}

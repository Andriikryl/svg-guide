import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import { MainField } from "../mainField/MainField";
import AxisX from "../axisX/AxisX";
import AxisY from "../axisY/AxisY";

export default function Comand() {
  return (
    <section className={style.comand}>
      <Container>
        <h3 className={style.comands__title}>comands</h3>
        <div className={style.flex__group}>
          <MainField className={style.box}>
            <svg viewBox="-1.7500000000000002 -1.7500000000000002 22.625 22.625">
              <AxisX />
              <AxisY />
              <line
                x1="0"
                y1="0"
                x2="5"
                y2="5"
                stroke-dasharray="0.2"
                stroke-width="0.1"
                className={style.stroke}
              ></line>
              <path
                fill="none"
                stroke="#bde0fe"
                stroke-width=".24"
                d="
             M 5.0 5.0
             v 5.0
             L 10.0 15.0
             h 5.0
            "
              />
              <g transform-origin="0px 0px">
                <circle
                  r="0.26"
                  className={style.cicel}
                  stroke-width="0.12"
                ></circle>
              </g>
              <g>
                <circle
                  className={style.cicel}
                  stroke-width="0.12"
                  r=".4"
                  cx="5"
                  cy="5"
                  data-projection-id="199"
                ></circle>
                <circle
                  className={style.cicel}
                  stroke-width="0.12"
                  r=".4"
                  cx="5"
                  cy="10"
                  data-projection-id="200"
                ></circle>
                <circle
                  className={style.cicel}
                  stroke-width="0.12"
                  r=".4"
                  cx="10"
                  cy="15"
                  data-projection-id="201"
                ></circle>
                <circle
                  className={style.cicel}
                  stroke-width="0.12"
                  r=".4"
                  cx="15"
                  cy="15"
                  data-projection-id="202"
                ></circle>
              </g>
            </svg>
          </MainField>
          <code className={style.code__box}>
            <span className={style.code__item}>M 5.0 5.0</span>
            <span className={style.code__item}>v 5.0</span>
            <span className={style.code__item}>L 10.0 15.0</span>
            <span className={style.code__item}>h 5.0</span>
          </code>
        </div>
        <p className={style.description}>
          Remember: commands written with an uppercase letter are absolute
          commands, while commands written with a lowercase letter are relative
          commands.
        </p>
      </Container>
    </section>
  );
}

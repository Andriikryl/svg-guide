import React from "react";
import { Container } from "../container/Container";
import { MainField } from "../mainField/MainField";
import style from "./style.module.css";

export default function ScaleAnimation() {
  return (
    <section className={style.scale}>
      <Container>
        <p className={style.scale__description}>
          {" "}
          You can use transform: scale to animate svg
        </p>
        <MainField className={style.box}>
          <svg
            className={style.loading__bar}
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="212"
            viewBox="0 0 36 22"
            fill="white"
          >
            <g>
              <rect className={style.loading__barLeft} width="8" height="222" />
              <rect
                className={style.loading__barMidl}
                width="8"
                height="222"
                x="14"
              />
              <rect
                className={style.loading__barRight}
                width="8"
                height="222"
                x="28"
              />
            </g>
          </svg>
        </MainField>
      </Container>
    </section>
  );
}

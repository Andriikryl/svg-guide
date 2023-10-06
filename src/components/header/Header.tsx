import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import Flag from "../flag/Flag";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.flex__group}>
          <span className={style.header__title}>header</span>
          <Flag />
        </div>
      </Container>
    </header>
  );
}

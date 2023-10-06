import React from "react";
import { Container } from "../container/Container";
import { MainField } from "../mainField/MainField";
import style from "./style.module.css";
const rectangle = <rect x={40} y={15} width={30} height={65} fill="hotpink" />;
const circle = <ellipse cx={30} cy={60} rx={20} ry={20} fill="lightsalmon" />;
const triangle = <polygon points="15,80 30,55 45,80" fill="turquoise" />;
export default function Positions() {
  return (
    <section className={style.positions}>
      <Container>
        <MainField className={style.box}>
          <svg viewBox="0 0 300 300" fill="#abff4f">
            <path
              d={`
                M 100,100
                L 200,100
                L 200,200
                L 100,200
                L 100,100
            `}
            />
          </svg>
        </MainField>
        <p className={style.position__description}>
          For all elements, SVG uses a coordinate system or grid system similar
          to the one used by canvas (and by a whole lot of other computer
          drawing routines). That is, the top left corner of the document is
          considered to be the point (0,0), or point of origin. Positions are
          then measured in pixels from the top left corner, with the positive x
          direction being to the right, and the positive y direction being to
          the bottom.
        </p>
        <code className={style.code__box}>
          <p className={style.code}>
            rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;100&quot;
            height=&quot;100&quot;
          </p>
        </code>
        <h4 className={style.title}>&quot;pixels&quot;? WTF?</h4>
        <p className={style.position__description}>
          In the most basic case, one pixel in an SVG document maps to one pixel
          on the output device (i.e., the screen). But SVG would not have the
          Scalable in its name if there were not several possibilities to change
          this behavior. Much like absolute and relative font sizes in CSS, SVG
          defines absolute units (ones with a dimensional identifier like pt or
          cm) and so-called user units, which lack that identifier and are plain
          numbers.
        </p>
        <MainField className={style.box}>
          <svg
            style={{
              background: "#cae9ff",
              width: 240,
            }}
            viewBox="0 0 80 80"
          >
            {rectangle}
            {circle}
            {triangle}
          </svg>
        </MainField>
      </Container>
    </section>
  );
}

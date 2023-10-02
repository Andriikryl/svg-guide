import CircleSvg from "@/components/circleSvg/CircleSvg";
import Hero from "@/components/hero/Hero";
import Line from "@/components/line/Line";
import ViewBox from "@/components/viewBox/ViewBox";

export default function Home() {
  return (
    <>
      <Hero />
      <ViewBox />
      <CircleSvg />
      <Line />
    </>
  );
}

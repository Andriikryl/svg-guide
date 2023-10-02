import CircleSvg from "@/components/circleSvg/CircleSvg";
import Hero from "@/components/hero/Hero";
import Line from "@/components/line/Line";
import Path from "@/components/path/Path";
import Polyline from "@/components/polyline/Polyline";
import Transform from "@/components/transform/Transform";
import ViewBox from "@/components/viewBox/ViewBox";

export default function Home() {
  return (
    <>
      <Hero />
      <ViewBox />
      <CircleSvg />
      <Line />
      <Polyline />
      <Path />
      <Transform />
    </>
  );
}

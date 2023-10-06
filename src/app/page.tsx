import CircleSvg from "@/components/circleSvg/CircleSvg";
import Comand from "@/components/comands/Comand";
import Curves from "@/components/curves/Curves";
import Hero from "@/components/hero/Hero";
import Line from "@/components/line/Line";
import MultiLine from "@/components/multiLine/MultiLine";
import Path from "@/components/path/Path";
import Polyline from "@/components/polyline/Polyline";
import Positions from "@/components/positions/Positions";
import ScaleAnimation from "@/components/scaleAnimation/ScaleAnimation";
import Transform from "@/components/transform/Transform";
import ViewBox from "@/components/viewBox/ViewBox";

export default function Home() {
  return (
    <>
      <Hero />
      <Positions />
      <ViewBox />
      <CircleSvg />
      <Line />
      <MultiLine />
      <Comand />
      <Polyline />
      <Path />
      <Curves />
      <Transform />
      <ScaleAnimation />
    </>
  );
}

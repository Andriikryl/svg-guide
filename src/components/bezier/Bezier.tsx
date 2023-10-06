"use client";
import React, { useState, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface BezierProps {
  viewBoxWidth: number;
  viewBoxHeight: number;
}

const Bezier: React.FC<BezierProps> = ({ viewBoxWidth, viewBoxHeight }) => {
  const [points, setPoints] = useState<{
    startPoint: Point;
    controlPoint: Point;
    endPoint: Point;
  }>({
    startPoint: { x: 10, y: 10 },
    controlPoint: { x: 190, y: 100 },
    endPoint: { x: 10, y: 190 },
  });

  const [draggingPointId, setDraggingPointId] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseDown = (pointId: string) => {
    setDraggingPointId(pointId);
  };

  const handleMouseUp = () => {
    setDraggingPointId(null);
  };

  const handleMouseMove = ({
    clientX,
    clientY,
  }: React.MouseEvent<SVGSVGElement>) => {
    if (!draggingPointId) {
      return;
    }

    const svgRect = svgRef.current!.getBoundingClientRect();

    const svgX = clientX - svgRect.left;
    const svgY = clientY - svgRect.top;

    const viewBoxX = (svgX * viewBoxWidth) / svgRect.width;
    const viewBoxY = (svgY * viewBoxHeight) / svgRect.height;

    setPoints({
      ...points,
      [draggingPointId]: { x: viewBoxX, y: viewBoxY },
    });
  };

  const instructions = `
    M ${points.startPoint.x},${points.startPoint.y}
    Q ${points.controlPoint.x},${points.controlPoint.y}
      ${points.endPoint.x},${points.endPoint.y}
  `;

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      onMouseMove={(ev) => handleMouseMove(ev)}
      onMouseUp={() => handleMouseUp()}
      onMouseLeave={() => handleMouseUp()}
      style={{ width: "100%", overflow: "visible" }}
    >
      <ConnectingLine from={points.startPoint} to={points.controlPoint} />
      <ConnectingLine from={points.controlPoint} to={points.endPoint} />

      <Curve instructions={instructions} />

      <LargeHandle
        coordinates={points.startPoint}
        onMouseDown={() => handleMouseDown("startPoint")}
      />

      <LargeHandle
        coordinates={points.endPoint}
        onMouseDown={() => handleMouseDown("endPoint")}
      />

      <SmallHandle
        coordinates={points.controlPoint}
        onMouseDown={() => handleMouseDown("controlPoint")}
      />
    </svg>
  );
};

interface ConnectingLineProps {
  from: Point;
  to: Point;
}

const ConnectingLine: React.FC<ConnectingLineProps> = ({ from, to }) => (
  <line
    x1={from.x}
    y1={from.y}
    x2={to.x}
    y2={to.y}
    stroke="rgb(200, 200, 200)"
    strokeDasharray="5,5"
    strokeWidth={2}
  />
);

interface CurveProps {
  instructions: string;
}

const Curve: React.FC<CurveProps> = ({ instructions }) => (
  <path d={instructions} fill="none" stroke="#ffc300" strokeWidth={3} />
);

interface HandleProps {
  coordinates: Point;
  onMouseDown: () => void;
}

const LargeHandle: React.FC<HandleProps> = ({ coordinates, onMouseDown }) => (
  <ellipse
    cx={coordinates.x}
    cy={coordinates.y}
    rx={6}
    ry={6}
    fill="rgb(255, 255, 255)"
    stroke="#e63946"
    strokeWidth={2}
    onMouseDown={onMouseDown}
    style={{ cursor: "-webkit-grab" }}
  />
);

const SmallHandle: React.FC<HandleProps> = ({ coordinates, onMouseDown }) => (
  <ellipse
    cx={coordinates.x}
    cy={coordinates.y}
    rx={5}
    ry={5}
    fill="rgb(255, 255, 255)"
    stroke="#ffc300"
    strokeWidth={2}
    onMouseDown={onMouseDown}
    style={{ cursor: "-webkit-grab" }}
  />
);

export default Bezier;

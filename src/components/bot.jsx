// src/components/Robot.js
import React from "react";

export default function Bot({ x, y, direction }) {
  const directionClasses = {
    up: "rotate-0",
    right: "rotate-90",
    left: "-rotate-90",
    down: "rotate-180",
  };

  return (
    <div
      className={`absolute transition-all duration-300 ease-linear`}
      style={{
        top: `calc(${y * 4}rem + 0.25rem + 2.25rem)`,
        left: `calc(${x * 4}rem + 0.25rem + 2.25rem)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <p className={`${directionClasses[direction]}`}>🤖</p>
    </div>
  );
}

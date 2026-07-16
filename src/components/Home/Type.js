import React from "react";
import Typewriter from "typewriter-effect";
// components to make type writing effect
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Agentic AI",
          "Human-AI Collaboration",
          "AI for Education"
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

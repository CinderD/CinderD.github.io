import React from "react";
import Typewriter from "typewriter-effect";
// components to make type writing effect
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "LLM for Education",
          "Visual Analytics",
          "Human-AI Collaboration"
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

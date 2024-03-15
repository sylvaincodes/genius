import React from "react";
import Typewriter from "typewriter-effect";

function Type({data}:{ data: Array<string> }) {
  return (
    <Typewriter
      options={{
        strings: data,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
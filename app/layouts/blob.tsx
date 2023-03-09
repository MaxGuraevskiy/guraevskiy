"use client";
import React, { useEffect, useRef } from "react";

function Blob() {
  const blob = useRef<HTMLDivElement>(null);

  return (
    <div
      id="blur"
      onPointerMove={(event) => {
        const { clientX, clientY } = event;

        blob.current?.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }}
    >
      <div id="blob" ref={blob}></div>
    </div>
  );
}

export default Blob;

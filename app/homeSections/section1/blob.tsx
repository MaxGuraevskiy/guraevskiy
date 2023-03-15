"use client";
import React, { useEffect, useRef } from "react";

import "./blob.css";

function Blob() {
  const blob = useRef<HTMLDivElement>(null);

  return (
    <div
      id="blur"
      onPointerMove={(event) => {
        const { clientX, clientY } = event;
        if (blob.current) blob.current.style.display = "block";
        blob.current?.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }}
      onPointerLeave={() => {
        if (blob.current) blob.current.style.display = "none";
      }}
    >
      <div id="blob" ref={blob}></div>
    </div>
  );
}

export default Blob;

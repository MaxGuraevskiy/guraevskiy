"use client";
import React, { useRef } from "react";

import "./blob.css";

function Blob() {
  const blob = useRef<HTMLDivElement>(null);

  return (
    <>
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
      ></div>
      <div id="blob" ref={blob}></div>
    </>
  );
}

export default Blob;

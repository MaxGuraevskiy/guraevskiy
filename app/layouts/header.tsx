"use client";
import React from "react";
import Image from "next/image";

import burgerMenu_path from "@/public/burgerMenu.svg";

function header() {
  return (
    <header>
      <h2>MG</h2>
      <button
        onClick={() => {
          console.log("test button");
        }}
      >
        <Image src={burgerMenu_path} alt="burger menu icon" />
      </button>
    </header>
  );
}

export default header;

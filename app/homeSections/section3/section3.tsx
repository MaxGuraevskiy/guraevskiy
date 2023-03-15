"use client";
import React, { useRef } from "react";
import Image from "next/image";

import kitten from "@/public/imageCarousel/kitten.jpg";
import building from "@/public/imageCarousel/building.jpg";
import cars from "@/public/imageCarousel/cars.jpg";
import gym from "@/public/imageCarousel/gym.jpg";
import gym_deadlift from "@/public/imageCarousel/gym_deadlift.jpg";
import maverick from "@/public/imageCarousel/maverick.jpg";
import keyboard_with_kitten from "@/public/imageCarousel/keyboard_with_kitten.jpg";

import "./section3.css";

function Section3() {
  const track = useRef<HTMLDivElement>(null);

  return (
    <section>
      <div
        id="image-track"
        data-mouse-down-at={0}
        data-prev-percentage={0}
        ref={track}
        onPointerDown={(e) => {
          track.current!.dataset.mouseDownAt = String(e.clientX);
        }}
        onPointerUp={(e) => {
          track.current!.dataset.mouseDownAt = "0";
          track.current!.dataset.prevPercentage =
            track.current!.dataset.percentage;
        }}
        onPointerMove={(e) => {
          if (track.current!.dataset.mouseDownAt === "0") return;
          const mouseDelta =
              parseFloat(track.current!.dataset.mouseDownAt!) - e.clientX,
            maxDelta = window.innerWidth / 2;
          const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained =
              parseFloat(track.current!.dataset.prevPercentage!) + percentage,
            nextPercentage = Math.max(
              Math.min(nextPercentageUnconstrained, 0),
              -100
            );
          track.current!.dataset.percentage = String(nextPercentage);
          track.current!.animate(
            {
              // transform: "translate(" + { nextPercentage } + "%, -50%)",
              transform: `translate(${nextPercentage}%, -50%)`,
            },
            { duration: 1200, fill: "forwards" }
          );
          for (const image of track.current!.getElementsByClassName("image")) {
            image.animate(
              {
                objectPosition: `${100 + nextPercentage}% center`,
              },
              { duration: 1200, fill: "forwards" }
            );
          }
        }}
      >
        <Image src={kitten} alt="" className="image" draggable="false" />
        <Image src={building} alt="" className="image" draggable="false" />
        <Image src={cars} alt="" className="image" draggable="false" />
        <Image src={gym} alt="" className="image" draggable="false" />
        <Image src={gym_deadlift} alt="" className="image" draggable="false" />
        <Image src={maverick} alt="" className="image" draggable="false" />
        <Image
          src={keyboard_with_kitten}
          alt=""
          className="image"
          draggable="false"
        />
      </div>
    </section>
  );
}

export default Section3;

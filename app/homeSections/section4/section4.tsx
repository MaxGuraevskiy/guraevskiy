"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./section4.css";

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min: number, max: number, prev: number) => {
  let next = prev;
  while (prev === next) next = rand(min, max);
  return next;
};

function Section4() {
  const wrapper = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const [prev, setPrev] = useState(1);
  const [textValue, setTextValue] = useState("");

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vwm81vl",
        "template_yzmn86e",
        form.current!,
        "znehq6HGcp-f-JKI5"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(`Сообщение доставлено. Статус доставки: ${result.text}`);
        },
        (error) => {
          console.log(error.text);
          alert(`Сообщение не доставлено. Статус доставки: ${error.text}`);
        }
      );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const index = uniqueRand(0, combinations.length - 1, prev);
      const combination = combinations[index];
      const current = wrapper.current as HTMLDivElement;

      current.dataset.roundness = String(combination.roundness);
      current.dataset.configuration = String(combination.configuration);

      setPrev(index);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Feedback">
      <h2 className="font-sans_pro text-[2.5rem] pt-[15px] z-[3]">
        Вы можете мне оставить сообщение
      </h2>
      <form ref={form} onSubmit={sendEmail} className="z-[3]">
        <div className="loading-indicator" id="loading-indicator__2">
          <textarea
            id="textbox"
            value={textValue}
            className=""
            onChange={(e) => setTextValue(e.target.value)}
            name="message"
          />
        </div>
        <button type="submit" className="w-full border-2 rounded-[7px] z-[3]">
          <h3 className="font-sans_pro text-[2rem] z-[3]">Отправить</h3>
        </button>
      </form>

      <div id="wrapper" ref={wrapper} data-configuration="1" data-roundness="1">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    </section>
  );
}

export default Section4;

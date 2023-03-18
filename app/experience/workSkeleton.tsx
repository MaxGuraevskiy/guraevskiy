import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import "./workSkeleton.css";

type props = {
  id: string;
  src: StaticImageData;
  tech: {
    name: string;
  }[];
  title: string;
  descrition: string;
  links: {
    link: string;
    title: string;
  }[];
};

const WorkSkeleton = ({ props }: { props: props }) => {
  return (
    <section id={props.id}>
      <div className="w-full  flex flex-col mobile:flex-row justify-between">
        <div className="flex flex-col justify-between">
          <Image
            src={props.src}
            alt=""
            className="w-[100vmin] mobile:w-[70vmin] object-contain"
          />
          <div className="">
            <h2 className="font-sans_pro text-[2rem] small:text-[3rem] medium:text-[4rem]">
              Технологии
            </h2>
            <ul className="">
              {props.tech.map((e, index) => (
                <li className="" key={`${e.name}${index}`}>
                  <h3 className="font-mono text-[1.5rem] small:text-[2rem] medium:text-[3rem]">
                    {e.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row-reverse mobile:flex-col justify-between items-end">
          <div className="flex flex-col items-center">
            <h1 className="font-sans_pro text-[3rem] small:text-[4rem] medium:text-[6rem]">
              {props.title}
            </h1>

            <h2 className="font-sans_pro text-[1.5rem] small:text-[1.8rem] medium:text-[3rem] whitespace-normal w-[50vmin] ml-[5rem]">
              {props.descrition}
            </h2>
          </div>

          <div className="flex flex-col">
            {props.links.map((e, index) => (
              <Link
                id="source-link"
                href={e.link}
                target="_blank"
                key={`${e.title}${index}`}
              >
                <span className="font-mono text-[1.2rem]">{e.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSkeleton;

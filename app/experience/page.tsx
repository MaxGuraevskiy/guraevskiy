import React from "react";
import { StaticImageData } from "next/image";

import WorkSkeleton from "./workSkeleton";

import Legion_path from "@/public/works/legion.png";
import FlyBoots_path from "@/public/works/flyboots.png";
import CheckPoint_path from "@/public/works/checkpoint.png";
import Typography_path from "@/public/works/typography.png";
import Guraevskiy_path from "@/public/works/guraevskiy.png";

import "./page.css";

const work1 = {
  id: "FlyBoots",
  src: FlyBoots_path,
  tech: [
    { name: "Next" },
    { name: "Redux ToolKit" },
    { name: "TypeScript" },
    { name: "DatoCMS" },
    { name: "EmailJS" },
    { name: "PayAnyWay" },
  ],
  title: "FlyBoots",
  descrition: `Сервис для покупки товаров с Poizon был реализован в 2023 
  с фреймворком Next, который первый раз мною был опробован. К приложению подключены
  сервисы СДЭКа, BoxBerry, онлайн-кассы и прочее.`,
  links: [
    { link: "https://github.com/Hermes325/flyboot", title: "GitHub" },
    { link: "https://www.flyboots.store/", title: "Source" },
  ],
};

const work2 = {
  id: "CheckPoint",
  src: CheckPoint_path,
  tech: [
    { name: "Expo" },
    { name: "React Native" },
    { name: "React" },
    { name: "Antd" },
  ],
  title: "CheckPoint",
  descrition: `Кроссплатформенное приложение на фреймворе Expo, базовая 
  админ страница на React со стилизацией компонентов Antd.
  Приложение осуществляет функцию заказа пропусков, а так же 
  администрирование со стороны модератора.`,
  links: [
    { link: "https://github.com/MaxGuraevskiy/CheckPoint", title: "GitHub" },
    { link: "https://github.com/MaxGuraevskiy/CheckPointRN", title: "GitHub" },
  ],
};

const work3 = {
  id: "Legion",
  src: Legion_path,
  tech: [
    { name: "Gatsby" },
    { name: "SASS" },
    { name: "DatoCMS" },
    { name: "Yandex Maps" },
    { name: "Yandex Metrika" },
  ],
  title: "Legion",
  descrition: `Проект Legion был создан для одноимённой девелоперской компании. Над
  приложением работала, образованная команда под этот проект, из 5 человек.
  В виду некоторых недопониманий разработка остановилась на уровне MVP.`,
  links: [
    { link: "https://github.com/mskKote/Legion", title: "GitHub" },
    { link: "https://legionmain80175.gatsbyjs.io/", title: "Source" },
  ],
};

const work4 = {
  id: "Typography",
  src: Typography_path,
  tech: [
    { name: "Gatsby" },
    { name: "Redux" },
    { name: "Yandex Maps" },
    { name: "Firebase" },
  ],
  title: "Typography",
  descrition: `Веб-приложение для типографии, которое создано, чтобы пользователь
  имел возможность делать свои заказы онлайн.`,
  links: [
    { link: "https://github.com/MaxGuraevskiy/typography", title: "GitHub" },
  ],
};

const work5 = {
  id: "Guraevskiy",
  src: Guraevskiy_path,
  tech: [{ name: "Next JS" }, { name: "TypeScript" }, { name: "Tailwind" }],
  title: "Guraevskiy",
  descrition: `Вы сейчас находитель на данной странице. Приложение создано на
  крайней версии Next JS на момент создания (02.03.23) с использованием app директории. `,
  links: [
    { link: "https://github.com/MaxGuraevskiy/guraevskiy", title: "GitHub" },
    { link: "https://guraevskiy.vercel.app/", title: "Source" },
  ],
};

const works = [work1, work2, work3, work4, work5];

function Experience() {
  return (
    <main>
      {works.map((e, index) => (
        // it's a sin to do this, but it won't affect the functionality
        <div key={`${e.id}${index}`}>
          <WorkSkeleton props={e} />
          <br></br>
        </div>
      ))}
    </main>
  );
}

export default Experience;

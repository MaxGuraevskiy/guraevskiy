import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import classNames from "classnames";

import me_main_path from "@/public/me_main.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section id={"Home"}>
        <div className={classNames(styles.glass, "")}>
          <Image
            src={me_main_path}
            alt=""
            className="rounded-full w-[20rem] h-[20rem]"
            style={{ objectFit: "cover" }}
          />
          <h1 className="font-sans_pro text-[5rem]">Максим Гураевский</h1>
          <p className="line-1 anim-typewriter">
            Software Engineer, Front-end Developer
          </p>
        </div>
      </section>
    </main>
  );
}

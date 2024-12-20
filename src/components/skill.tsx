import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { skills } from "@/data/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export function SkillMe() {
  return (
    <div id="skill" className="">
      <center>
        <div className={playfair.className}>
          <h1 className=" text-yellow-400 font-bold text-5xl pt-16 pb-4">
            My Skill
          </h1>
        </div>
      </center>

      <div className="justify-center flex flex-wrap gap-10 lg:gap-20">
        {skills.map((arr, index) => (
          <div key={index} className="card glass w-32 lg:w-96">
            <figure className="relative w-auto h-32 lg:h-96">
              <Image src={arr.img} fill alt="image" className="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{arr.tag}</h2>
              <p>{arr.img}</p>
              <progress
                className="progress progress-success bg-slate-400 w-9/12"
                value="80"
                max="100"
              ></progress>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

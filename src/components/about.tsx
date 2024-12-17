import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export function AboutMe() {
  return (
    <div id="about" className=" text-black">
      <center>
        <div className={playfair.className}>
          <h1 className=" text-yellow-400 font-bold text-5xl pt-16 pb-4">
            About Me
          </h1>
        </div>
        <div className="card lg:card-side bg-white shadow-xl w-10/12">
          <figure className="flex relative w-12/12 h-[300px] lg:w-3/12">
            <Image src={"/about.jpg"} fill alt="about" className="abs" />
          </figure>
          <div className="card-body text-left">
            <p>
              PPIC on manufacture, and hobby in{" "}
              <span className="hover:text-lime-500 font-bold">
                Web Development
              </span>
            </p>
            <h2 className="card-title">Non developer</h2>
            <p>PPIC Skill</p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="90"
              max="100"
            ></progress>
            <h2 className="card-title">Developer</h2>
            <p>Frontend</p>
            <progress
              className="progress progress-error bg-slate-400 w-9/12"
              value="50"
              max="100"
            ></progress>
            <p>Backend</p>
            <progress
              className="progress progress-info bg-slate-400 w-9/12"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
      </center>
    </div>
  );
}

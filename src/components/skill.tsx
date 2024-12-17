import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

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
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/html.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">HTML</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/css.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">CSS</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/js.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">javascript</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/php.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">php</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/mysql.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">mysql</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/nodejs.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Node JS</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="20"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/bootstrap.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bootstrap</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/nextjs.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Next JS</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/github.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Github</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/postman.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Postman</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="card glass w-32 lg:w-96">
          <figure className="relative w-auto h-32 lg:h-96">
            <Image src={"/contentful.png"} fill alt="image" className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Contentful</h2>
            <p></p>
            <progress
              className="progress progress-success bg-slate-400 w-9/12"
              value="30"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
}

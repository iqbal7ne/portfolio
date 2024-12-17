import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export function Project() {
  return (
    <div id="project" className="">
      <center>
        <div className={playfair.className}>
          <h1 className=" text-yellow-400 font-bold text-5xl pt-16 pb-4">
            My Project
          </h1>
        </div>
      </center>
      <div className="justify-center flex flex-wrap gap-10 lg:gap-20">
        <div className="card lg:card-side border shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

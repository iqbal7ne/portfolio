import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export function Contact() {
  return (
    <center>
      <div id="contact" className="">
        <div className={playfair.className}>
          <h1 className=" text-yellow-400 font-bold text-5xl pt-16 pb-4">
            Contact Me
          </h1>
        </div>

        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </center>
  );
}

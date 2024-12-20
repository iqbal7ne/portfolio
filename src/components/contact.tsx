import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 relative">
            <Image src={"/myimage.jpg"} fill alt="contact" />
          </div>
        </div>
        <h1 className="pt-4">you can reach me by using these social media</h1>
        <div className="avatar gap-3">
          <div className="w-24 rounded-full relative hover:bg-slate-700">
            <Link
              href={"https://discordapp.com/users/darkblaze29"}
              target="_blank"
            >
              <Image src="/discord.png" fill alt="github" />
            </Link>
          </div>
          <div className="w-24 rounded-full relative hover:bg-slate-700">
            <Link
              href={"https://www.linkedin.com/in/muhammad-iqbal-71230a1bb/"}
              target="_blank"
            >
              <Image src="/linkedin.png" fill alt="github" />
            </Link>
          </div>
          <div className="w-24 rounded-full relative hover:bg-slate-700">
            <Link href={"https://github.com/iqbal7ne/"} target="_blank">
              <Image src="/github2.png" fill alt="github" />
            </Link>
          </div>
        </div>
      </div>
    </center>
  );
}

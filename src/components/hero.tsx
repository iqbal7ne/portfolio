import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

// Developer’s Name: Full name or professional alias.
// Job Title: E.g., "Full-Stack Web Developer" or "Software Engineer."
// Professional Photo or Avatar: A photo or avatar that reflects a professional image.
// Brief Introduction: A short description emphasizing core skills or services, such as "Building scalable and high-performance web solutions for your business needs."
// Call-to-Action (CTA): Button to direct visitors, such as “View Portfolio” or “Contact Me.”

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export function Hero() {
  return (
    <div id="hero" className="hero min-h-screen relative">
      <Image src="/myPhoto.jpg" fill alt="hero" />
      <Image src="/hero.jpg" fill alt="hero" className="lg:hidden" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="flex items-baseline justify-center">
            <h1 className=" text-xl font-bold">Hello i&apos;m</h1>
            <div className={playfair.className}>
              <h1 className="pl-3 text-5xl font-bold">IQBAL</h1>
            </div>
          </div>
          <p>
            Currently as PPIC and hobby in{" "}
            <span className="font-bold hover:text-lime-500">
              Full-Stack Web Developer
            </span>
          </p>
          <Link href={"#about"} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

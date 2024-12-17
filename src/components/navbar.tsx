import Link from "next/link";
import React from "react";
import { FaCode, FaGithub } from "react-icons/fa6";

export function NavbarComponent() {
  return (
    <div className="navbar bg-black sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"#about"}>About</Link>
            </li>
            <li>
              <Link href={"#skill"}>Skills</Link>
            </li>
            <li>
              <Link href={"#project"}>Project</Link>
            </li>
            <li>
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <Link href={"#hero"} className="btn btn-ghost text-3xl">
          <FaCode />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#skill"}>Skills</Link>
          </li>
          <li>
            <Link href={"#project"}>Project</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="https://github.com/iqbal7ne"
          target="_blank"
          className=" text-3xl"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}

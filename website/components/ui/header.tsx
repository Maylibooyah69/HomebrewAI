"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import tinycolor from "tinycolor2";

export default function Header() {
  const backgroundColor = "blue"; // Replace this with your dynamic background color
  const contrastColor = tinycolor
    .mostReadable(backgroundColor, ["black", "white"])
    .toHexString();
  //random color
  const colors = {
    red: "bg-red-200",
    yellow: "bg-yellow-200",
    green: "bg-green-200",
    blue: "bg-blue-200",
    indigo: "bg-indigo-200",
    purple: "bg-purple-200",
    pink: "bg-pink-200",
  };
  const colorKeys = Object.keys(colors);
  const randomColor =
    colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];

  const [top, setTop] = useState<boolean>(true);
  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300  ease-in-out ${
        !top ? "backdrop-blur-sm shadow-lg bg-gray-700" : ""
      }`}
    >
      <div className=" max-w-[80%] mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/events" className="header-link">
                  活动
                </Link>
              </li>
              <li>
                <Link href="/blog" className="header-link">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/about" className="header-link">
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>加入我们</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

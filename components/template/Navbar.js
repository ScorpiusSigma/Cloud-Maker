import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Bars = () => {
  return (
    <div className="flex flex-col gap-1">
      {[...Array(3)].map((bar, index) => (
        <div key={index} className="border border-black w-5 " />
      ))}
    </div>
  );
};

const Navbar = () => {
  const pages = [
    { name: "About", href: "/" },
    { name: "Developers", href: "/" },
    { name: "Token", href: "/" },
    { name: "Blog", href: "/" },
  ];
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [useRouter().pathname]);

  return (
    <div className="absolute top-0 z-10 flex flex-row items-center justify-between w-full h-20 p-8 bg-white text-black">
      <Link href="/">
        <button className="flex flex-row items-center gap-4 w-80 md:w-80">
          <span className="w-14 md:w-28 h-full flex justify-center items-center">
            <Image
              src="/cloudMakerLogo.svg"
              alt="Picture of the logo"
              height={"100%"}
              width={"100%"}
            />
          </span>
          <span className="font-semibold hidden text-xl md:text-3xl lg:flex">
            CloudMakerDAO
          </span>
        </button>
      </Link>

      <ul className="flex-row gap-16 hidden lg:flex">
        {pages.map((page, index) => (
          <Link key={index} href={page.href}>
            <li>
              <button>{page.name}</button>
            </li>
          </Link>
        ))}
      </ul>

      <div className="w-80 justify-end hidden lg:flex">
        <Link href="/app">
          <button className="bg-[#7EA4FF] active:bg-[#597fdc] rounded-full font-semibold text-white px-5 h-12">
            Get Started
          </button>
        </Link>
      </div>

      <div className="w-20 flex items-center justify-center p-5 lg:hidden z-50">
        <button className="h-full" onClick={() => setShowMenu(!showMenu)}>
          <Bars />
        </button>
        <div
          className={`absolute bg-white h-max w-full top-20 left-0  ${
            showMenu ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-2 py-5">
            {pages.map((page, index) => (
              <Link key={index} href={page.href}>
                <li>
                  <button>{page.name}</button>
                </li>
              </Link>
            ))}
            <Link href="/app">
              <li>
                <button className="bg-[#7EA4FF] active:bg-[#597fdc] rounded-full font-semibold text-white px-5 h-12">
                  Get Started
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

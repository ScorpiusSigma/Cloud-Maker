import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pages = [
    { name: "About", href: "/" },
    { name: "Developers", href: "/" },
    { name: "Token", href: "/" },
    { name: "Blog", href: "/" },
  ];

  return (
    <div className="absolute top-0 z-10 flex flex-row items-center justify-between w-full h-20 p-8 bg-white text-black">
      <Link href="/">
        <button className="flex flex-row items-center gap-4 w-80">
          <span className="w-28 h-full flex justify-center items-center">
            <Image
              src="/cloudMakerLogo.svg"
              alt="Picture of the logo"
              height={"100%"}
              width={"100%"}
            />
          </span>
          <span className="font-semibold text-3xl">CloudMakerDAO</span>
        </button>
      </Link>

      <ul className="flex flex-row gap-16">
        {pages.map((page, index) => (
          <Link key={index} href={page.href}>
            <li>
              <button>{page.name}</button>
            </li>
          </Link>
        ))}
      </ul>

      <div className="w-80 flex justify-end">
        <Link href="/app">
          <button className="bg-[#7EA4FF] active:bg-[#597fdc] rounded-full font-semibold text-white px-5 h-12">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

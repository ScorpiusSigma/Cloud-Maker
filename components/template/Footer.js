import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const socials = [
    {
      icon: (
        <FontAwesomeIcon
          icon={["fab", "discord"]}
          className="w-full h-full text-[#5865F2]"
        />
      ),
      href: "",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          className="w-full h-full text-[#55ACEE]"
        />
      ),
      href: "",
    },
  ];
  return (
    <footer className="flex flex-col gap-20 md:gap-40 items-center px-10 py-10 lg:p-40 w-full text-xl md:text-4xl xl:text-6xl">
      <div>Get Started As a...</div>
      <div className="flex flex-col items-center gap-2 md:gap-10 md:flex-row justify-between px-5 md:px-20 w-full">
        <Link href="/">
          <span className="underline">Hoster</span>
        </Link>
        <Link href="/">
          <span className="underline">Developer</span>
        </Link>
      </div>

      <div className="flex flex-row gap-10 md:gap-40 justify-center w-full text-white">
        {socials.map((social, index) => (
          <Link key={index} href={social.href}>
            <button className="bg-white rounded-full w-16 h-16 md:w-24 md:h-24 p-2 md:p-4">
              {social.icon}
            </button>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

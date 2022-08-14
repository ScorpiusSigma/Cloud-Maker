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
    <footer className="flex flex-col gap-40 items-center px-40 py-40 w-full text-6xl">
      <div>Get Started As a...</div>
      <div className="flex justify-between px-20 w-full">
        <Link href="/" className="underline">
          Hoster
        </Link>
        <Link href="/" className="underline">
          Developer
        </Link>
      </div>

      <div className="flex flex-row gap-40 justify-center w-full text-white">
        {socials.map((social, index) => (
          <Link key={index} href={social.href}>
            <button className="bg-white rounded-full w-24 h-24 p-4">
              {social.icon}
            </button>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

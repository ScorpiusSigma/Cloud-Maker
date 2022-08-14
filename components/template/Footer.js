import { faAmbulance, faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-40 items-center px-40 py-40 w-full text-6xl">
      <div>Get Started As a...</div>
      <div className="flex justify-between px-20 w-full">
        <a href="/" className="underline">
          Hoster
        </a>
        <a href="/" className="underline">
          Developer
        </a>
      </div>

      <div className="flex flex-row gap-40 justify-center w-full text-white">
        <button className="bg-white rounded-full w-24 h-24 p-4">
          <FontAwesomeIcon
            icon={["fab", "discord"]}
            className="w-full h-full text-[#5865F2]"
          />
        </button>
        <button className="bg-white rounded-full w-24 h-24 p-4">
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className="w-full h-full text-[#55ACEE]"
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

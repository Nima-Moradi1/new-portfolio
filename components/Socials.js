// link
import Link from "next/link";
// icons
import {
  RiTelegramLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-10 text-2xl">
      <Link
        href={"https://github.com/Nima-Moradi1"}
        className="hover:text-red-400 hover:scale-110 transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link
        href={"https://instagram.com/m.nima80"}
        className="hover:text-red-400 hover:scale-110 transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://t.me/Nima_Man_Hastam"}
        className="hover:text-red-400 hover:scale-110 transition-all duration-300">
        <RiTelegramLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/nima-moradi-rad-1380s/"}
        className="hover:text-red-400 hover:scale-110 transition-all duration-300 mr-6">
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;

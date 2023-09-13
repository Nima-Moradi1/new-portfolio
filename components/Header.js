import Image from "next/image";
// next link
import Link from "next/link";
// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header
      className="absolute h-24 z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]
    bg-gradient-to-r from-black/25 via-black/50 to-black/75 rounded-md">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-6">
          {/* logo */}
          <Link href={"/"}>
            <div className="shadow-sm hover:scale-110 duration-300 shadow-gray-800 text-[34px] font-extrabold text-white  ">
              <span className="tracking-[2px] font-serif">Nima </span>
              <span className="text-[27px] text-white font-extralight">
                Moradi
              </span>
              <span className="text-red-400 font-extrabold">.</span>
            </div>
          </Link>
          {/* social accounts*/}
          <div className="mb-2">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

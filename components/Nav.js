// icons
import { HiHome, HiUser, HiEnvelope } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "work", path: "/work", icon: <CgWebsite /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
// next link
import Link from "next/link";
//next router
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
    bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center
      gap-y-10 px-4 md:px-40 xl:px-0 h-[20px] xl:h-max py-5 bg-white/10
      backdrop-blur-sm text-xl xl:text-xl xl:rounded-full">
        {navData.map((item, index) => {
          return (
            <Link
              className={`${
                item.path === pathname && "text-red-300"
              } relative flex items-center
              group hover:text-red-300 hover:scale-125 transition-all duration-300`}
              href={item.path}
              key={index}>
              {/* tooltip*/}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-lg">
                  <div className="text-[12px] loading-none font-semibold capitalize">
                    {item.name}
                  </div>
                  {/* triangle*/}
                  <div
                    className="border-solid border-l-white border-l-8 
                  border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icon*/}
              <div> {item.icon} </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

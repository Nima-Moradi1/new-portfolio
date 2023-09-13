//next image
import Image from "next/image";

// icons
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
// data
const workSlides = {
  images: [
    {
      title: "Airbnb Clone",
      tools: "NextJS, Tailwind, NextAuth, Prisma",
      website: "/",
      path: "/airbnb-.jpg",
    },
    {
      title: "Admin Panel",
      tools: "NextJS, MUI, Formik, NivoChart",
      website: "/",
      path: "/adminpanel-.jpg",
    },
    {
      title: "NiMovie Website",
      tools: "React.JS, Sass, REST-API",
      website: "https://ni-movie.vercel.app/",
      path: "/nimovie.jpg",
    },
    {
      title: "Simple TodoApp",
      tools: "ReactJS, Tailwind",
      website: "https://todo-list-sigma-jet.vercel.app/",
      path: "/todoapp.jpg",
    },
  ],
};

const WorkSlider = () => {
  return (
    <div className="grid grid-cols-2 gap-4 xl:mr-24 ">
      {workSlides.images.map((image, index) => {
        return (
          <div key={index}>
            <Link href={image.website} target="_blank">
              <div
                className="shadow-sm shadow-gray-300 flex items-center justify-center
                    relative overflow-hidden cursor-pointer rounded-xl group">
                {/* image */}
                <Image
                  alt=""
                  src={image.path}
                  width={400}
                  height={300}
                  className="w-[450px] h-[180px]"
                />
                {/* overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent
                      via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-75
                      transition-all duration-500"></div>
                {/* title */}
                <div
                  className=" absolute bottom-0 translate-y-full
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300 tracking-widest text-center">
                  {" "}
                  <div className="text-white bg-black mb-2 rounded-md">
                    {image.title}
                  </div>
                  <div className="text-sm px-2 mb-2 rounded-md text-black bg-white text-center">
                    {image.tools}
                  </div>
                  <div
                    className="flex items-center gap-x-2 text-[13px]
                        tracking-[0.2em] ml-7">
                    {/* title part 1 */}
                    <div className="delay-100">LIVE</div>
                    {/* title part 2 */}
                    <div
                      className="translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300">
                      PROJECT
                    </div>
                    {/* icon */}
                    <div
                      className="text-xl translate-y-[500%]
                          group-hover:translate-y-0 transition-all duration-300">
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default WorkSlider;

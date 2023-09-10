//next image
import Image from "next/image";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// icons
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "NiMovie Website",
          tools: "React.JS, Sass, REST-API",
          website: "https://ni-movie.vercel.app/",
          path: "/nimovie.jpg",
        },
        {
          title: "Admin Panel",
          tools: "Next.JS, Material UI, Data Grid",
          website: "/",
          path: "/adminpanel.jpg",
        },
        {
          title: "Airbnb Clone",
          tools: "Next.JS, Tailwind, Prisma, MongoDB, NextAuth",
          website: "/",
          path: "/airbnb.jpg",
        },
        {
          title: "Simple TodoApp",
          tools: "ReactJS, Tailwind",
          website: "https://todo-list-sigma-jet.vercel.app/",
          path: "/todoapp.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "Simple Persian Hangman!",
          tools: "ReactJS, Typescript, CSS",
          website: "https://guess-or-kill.vercel.app/",
          path: "/thumb4.jpg",
        },
        {
          title: "In Progress!",
          tools: "",
          website: "/",
          path: "/thumb1.jpg",
        },
        {
          title: "In Progress!",
          tools: "",
          website: "/",
          path: "/thumb2.jpg",
        },
        {
          title: "In Progress!",
          tools: "",
          website: "/",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}>
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-4 xl:mr-24">
              {slide.images.map((image, index) => {
                return (
                  <div key={index}>
                    <Link href={image.website} target="_blank">
                      <div
                        className="flex items-center justify-center
                    relative overflow-hidden cursor-pointer rounded-lg group">
                        {/* image */}
                        <Image
                          alt=""
                          src={image.path}
                          width={500}
                          height={300}
                        />
                        {/* overlay gradient */}
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent
                      via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-75
                      transition-all duration-500"></div>
                        {/* title */}
                        <div
                          className="absolute bottom-0 translate-y-full
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300 tracking-widest text-center">
                          {" "}
                          {image.title}
                          <div className="text-sm text-black text-center">
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiGreensock,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiDatabricks,
  SiMui,
} from "react-icons/si";
//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";
import Link from "next/link";
import Head from "next/head";
import ParticlesContainer from "../../components/ParticlesContainer";
//  datascre
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "TailwindCSS , MUI",
        icons: [<SiTailwindcss />, <SiMui />],
      },
      {
        title: "Javascript ES6",
        icons: [<FaJs />],
      },
      {
        title: "React.JS, Next.JS",
        icons: [<FaReact />, <SiNextdotjs />],
      },
      {
        title: "Redux, ReactQuery",
        icons: [<SiRedux />],
      },
      {
        title: "Framer / Gsap",
        icons: [<SiFramer />, <SiGreensock />],
      },
      {
        title: "MongoDB",
        icons: [<SiMongodb />],
      },
      {
        title: "Prisma",
        icons: [<SiPrisma />],
      },
      {
        title: "Formik",
        icons: [<SiDatabricks />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "React.JS Front-End Developer - Freelancer",
        stage: "",
      },
      {
        title: "React Development Intern - International Startup",
        stage: "",
      },
      {
        title: "Javascript ES6 InternShip - KZI Corporation",
        stage: "",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Certified Javascript Developer - W3Schools",
        stage: "",
      },
      {
        title: "Certified HTML and CSS developer - W3Schools",
        stage: "",
      },
      {
        title: "Computer Engeneering - Tehran Azad University",
        stage: "",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>

      <div className=" h-full bg-primary pt-12 text-center xl:text-left overflow-scroll scrollbar-none">
        {/*  avatar image */}
        <motion.div
          className="hidden big:flex absolute bottom-0 -left-[370px]"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden">
          <Avatar />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col justify-center xl:items-center mt-24 xl:mt-0">
            <motion.h2
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center xl:ml-12">
              Convert Your&nbsp;
              <span className="text-red-400">Imagination</span>
              &nbsp;To Full-Functional Websites
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 capitalize">
              a couple months ago , i began learning front-end
              development . since then , I&apos;ve come a long way ,
              from getting stuck for hours just to CENTER a div! , to
              building complex projects with Next.JS and dynamic
              websites with a great performance and SEO. you can see
              some of my recent projects{" "}
              <Link className="text-red-400 underline" href="/work">
                Here
              </Link>
              .
            </motion.p>
            {/* counters */}
            <div>
              <div>
                {/* experience */}
                <div
                  variants={fadeIn("right", 1)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className=" relative flex gap-x-4 mb-10 items-center justify-center xl:flex-col
                 xl:justify-start xl:items-start after:w-[1px] after:h-full after:bg-white/10
              after:absolute after:top-0 after:right-0">
                  <div className="text-4xl xl:text-5xl font-extrabold text-red-400 mb-1">
                    <CountUp start={0} end={10} duration={7} />+
                  </div>
                  <motion.div
                    variants={fadeIn("right", 1.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="text-xs uppercase tracking-[2px] 
                max-w-[100px]">
                    months of experience
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* info */}
          <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
            <motion.div
              className="flex gap-x-6 xl:gap-x-8 mx-auto xl:mx-0 mb-4 "
              variants={fadeIn("right", 1.4)}
              initial="hidden"
              animate="show"
              exit="hidden">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-red-400 after:w-full after:bg-red-400 after:transition-all after:duration-300"
                    } 
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                   after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}>
                    {item.title}
                  </div>
                );
              })}
            </motion.div>
            {/* aboutdata info */}
            <div
              className=" py-2 xl:py-6 flex flex-col 
          gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-row max-w-max gap-x-2 items-center text-white/60">
                    {/* title */}
                    <div className="font-light mb-2 md:mb-0">
                      {item.title}
                    </div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div
                            key={itemIndex}
                            className="text-2xl text-white">
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="opacity-0 mt-12">.</div>
        </motion.div>
      </div>
    </>
  );
};

export default About;

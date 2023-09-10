// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
// framer motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className=" h-[120vh] xl:h-[90vh] ">
        {/* text */}
        <div className="w-full h-full xl:pt-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          {/* <div className="opacity-0 h-32">.</div> */}
          <div
            className="text-center flex flex-col justify-center xl:pt-40 
        xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1">
              Welcome To <br /> Nima&rsquo;s{" "}
              <span className="animate-charcter text-red-300">
                Portfolio Page
              </span>
            </motion.h1>
            {/* subtitles */}
            <motion.p
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-blue-200 max-w-sm capitalize xl:max-w-lg mx-auto xl:mx-0 mb-10 xl:mb-16">
              You&rsquo;ve probably heard about some programmers that
              live under the shadow of StackOverFlow and Bard!.. well,
              that&rsquo;s me! I&rsquo;m trying to better by coding
              everyday and i hope a day would come that i
              wouldn&rsquo;t use StackOverFlow anymore!...
              <br /> feel free to check out the entire website..{" "}
              <br />
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex">
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className="xl:w-[1900px] h-full  absolute right-0 bottom-0">
          {/* bg image */}
          <div
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
        w-full h-full absolute mix-blend-overlay translate-z-0 "></div>
          {/* particles */}
          <ParticlesContainer />

          {/* avatar image */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[707px] max-h-[648px] absolute -bottom-32 
        lg:-bottom-12 lg:right-[1%]">
            <Avatar />
          </motion.div>
        </div>
        {/* <div className="opacity-0 h-32">.</div> */}
      </div>
    </>
  );
};

export default Home;

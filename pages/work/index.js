//  components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";

const Work = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="flex h-32 xl:h-16">.</div>
      <div className="h-full bg-primary/30 flex items-center">
        <div className="hidden lg:flex">
          <Circles />
        </div>
        <div className="container mx-auto md:mt-80 xl:mt-24 md:mb-12">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                className="h2 xl:mt-8 tracking-[3px]"
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden">
                My Projects
              </motion.h2>
              <motion.p
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 capitalize"
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden">
                in the past few months since i started learning about
                front-end development , i created some simple but
                practical projects ... <br /> by hovering on the
                pictures , you can see the{" "}
                <span className="text-red-300">Demo</span> and the
                <span className="text-red-300"> Tools</span> i used to
                create them.. let me know about all your critics and
                ideas !...
              </motion.p>
            </div>
            {/* slider */}
            <motion.div
              className="w-full xl:max-w-[65%]"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden">
              <WorkSlider />
            </motion.div>
          </div>
          <div className="flex opacity-0 mt-12 lg:mt-24">.</div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Work;

// icons
import { BsArrowRight } from "react-icons/bs";
//framer motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";
import Head from "next/head";
import { useState } from "react";
import ParticlesContainer from "../../components/ParticlesContainer";

const Contact = ({ email, onChange }) => {
  //email validation
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const newEmail = event.target.value;
    setIsValid(validateEmail(newEmail));
    onChange(newEmail);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9_.+-]+@gmail.com$/;
    return regex.test(email);
  };

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className="h-full bg-primary pt-24">
        <ParticlesContainer />
        <div
          className="container mx-auto py-32 text-center xl:text-left flex 
      items-center justify-center h-full">
          {/* text and form */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center xl:mb-12 ">
              Let&apos;s{" "}
              <span className="text-red-300">Connect.</span>
            </motion.h2>
            {/* form */}
            <motion.form
              method="POST"
              action="https://getform.io/f/0aa7aa23-354a-4f4c-bb97-e2a097539968"
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto">
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                  required></input>
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Email"
                  className="input"
                  required></input>
              </div>
              <input
                name="message"
                type="text"
                placeholder="Subject"
                className="input"
                required></input>
              <textarea
                name="message"
                className="textarea"
                placeholder="Message"
                required></textarea>
              <button
                className="btn mb-16 rounded-full border border-white/50 
            max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-red-300 group">
                <span
                  className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500">
                  Let&apos;s Talk
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[24px]"
                />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import Image from "next/image";
import { useState, useEffect, setTimeOut } from "react";

import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Avatar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // This function will be executed 1.2 seconds after the page loads.
    setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
  }, []);

  if (isLoaded) {
    // Render the component.
    return (
      <div className="hidden xl:flex xl:max-w-none">
        <Image
          src={"/bulb.png"}
          width={437}
          height={678}
          alt=""
          className="translate-z-0 animate-pulse duration-75 ml-48 mt-24 opacity-25"
        />
      </div>
    );
  } else {
    // Don't render the component yet.
    return null;
  }
};

export default Avatar;
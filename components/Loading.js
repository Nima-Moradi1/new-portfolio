import React from "react";
import { Audio } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex flex-col gap-16 items-center justify-center w-screen h-screen font-poppins bg-black text-white capitalize text-lg lg:text-3xl text-center">
      <div>you are being redirected to the page ...</div>
      <div className="scale-150">please wait</div>
      <div>
        <Audio
          height="80"
          width="80"
          radius="10"
          color="white"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    </div>
  );
};

export default Loading;

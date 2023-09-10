//next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div
      className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge
     animate-pulse duration-75 z-10 lg:w-[190px] w-[170px] xl:w-[275px]">
      <Image
        src={"/bulb.png"}
        alt="bulb"
        width={280}
        height={215}
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;

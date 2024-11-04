import React from "react";
import Image from "next/image";
const TrendyFlowers = () => {
  return (
    <section>
      <h1 className="text-center italic p-16 text-5xl font-normal max-[478px]:text-3xl max-[478px]:p-9 max-sm:text-4xl max-sm:p-12">
        trending fall flowers
      </h1>
      <div className="flex justify-evenly items-center flex-wrap gap-x-5 gap-y-10 mx-20 max-[478px]:justify-between max-[478px]:flex-wrap max-[478px]:gap-y-3 max-[478px]:gap-x-0 max-[478px]:m-3 max-lg:justify-evenly max-lg:flex-wrap max-sm:gap-y-3 max-sm:gap-x-0 max-sm:m-0 max-lg:gap-x-0 max-lg:mx-0">
        <div className="flex flex-col items-center bg-orange-500 max-[478px]:w-[45%] max-sm:w-[46%]   ">
          <Image
            width="290"
            height="100"
            src="/Images/trendy1.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full "
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            sunflowers
          </a>
        </div>

        <div className="flex flex-col items-center bg-orange-500 max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/trendy2.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            roses
          </a>
        </div>

        <div className="flex flex-col items-center bg-orange-500 max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/trendy3.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            mums
          </a>
        </div>

        <div className="flex flex-col items-center bg-orange-500 max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/trendy4.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            lilies
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendyFlowers;
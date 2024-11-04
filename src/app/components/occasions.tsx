import Image from "next/image";
import React from "react";

const Occasions = () => {
  return (
    <section className="">
      <h1 className="text-center italic p-16 text-5xl font-normal max-[478px]:text-3xl max-[478px]:p-9 max-lg:text-4xl">
        shop by occasion
      </h1>
      <div className="flex justify-evenly items-center flex-wrap gap-x-5 gap-y-10 mx-20 max-[478px]:justify-between max-[478px]:flex-wrap max-[478px]:gap-y-3 max-[478px]:gap-x-0 max-[478px]:m-3 max-lg:justify-evenly max-lg:flex-wrap max-sm:gap-y-3 max-sm:gap-x-0 max-sm:m-0 max-lg:gap-x-2 max-lg:m-0">
        <div className="flex flex-col items-center bg-lightGreen max-[478px]:w-[45%] max-sm:w-[46%] ">
          <Image
            width="290"
            height="100"
            src="/Images/occ-1.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            sympathy
          </a>
        </div>

        <div className="flex flex-col items-center bg-lightGreen max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/occ-2.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline  max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            birthday
          </a>
        </div>

        <div className="flex flex-col items-center bg-lightGreen max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/occ-3.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline  max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            get well
          </a>
        </div>

        <div className="flex flex-col items-center bg-lightGreen max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/occ-4.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline  max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            just because
          </a>
        </div>

        <div className="flex flex-col items-center bg-lightGreen max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/occ-5.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline  max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            anniversary
          </a>
        </div>

        <div className="flex flex-col items-center bg-lightGreen max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/occ-6.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline  max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            baby
          </a>
        </div>

        <div className="flex flex-col items-center bg-lightGreen max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/occ-7.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline  max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            thinking of you
          </a>
        </div>

        <div className="flex flex-col items-center bg-lightGreen max-[478px]:w-[45%] max-sm:w-[46%]">
          <Image
            width="290"
            height="100"
            src="/Images/occ-8.webp"
            className="h-[42vh] w-full max-sm:h-auto max-sm:w-full"
            alt=""
          />
          <a
            className="p-5 text-lg hover:underline  max-sm:text-base max-[478px]:p-4 max-sm:p-5"
            href="#"
          >
            same day delivery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Occasions;

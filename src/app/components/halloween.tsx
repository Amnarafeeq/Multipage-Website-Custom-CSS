import Image from "next/image";
import React from "react";
import Button from "./button";

const Halloween = () => {
  return (
    <section>
      <div className="relative flex justify-center items-center max-sm:flex-col">
        <Image
          width="1300"
          height="100"
          src="/Images/halloween.jpg"
          className="w-full h-[75vh] max-sm:hidden"
          alt=""
        />
        <Image
          width="1300"
          height="100"
          src="/Images/halloween-mobile.jpg"
          className="h-[75vh] hidden max-sm:block max-sm:w-full max-sm:h-auto "
          alt=""
        />
        <div className="absolute pr-[30rem] max-sm:bg-customPeach max-sm:static max-[478px]:py-4 max-[478px]:px-7 max-sm:py-6 max-sm:px-10 max-sm:text-center max-sm:w-full max-lg:py-9 max-lg:px-12 max-lg:pr-60 ">
          <p className="text-5xl italic max-[478px]:text-3xl max-sm:text-4xl">
            get into the halloween spirit
          </p>
          <p className="text-lg mt-5 max-sm:text-base ">
            Treat your friends & family with something boo-tiful and fun.
          </p>
          <div className="mt-4 max-[478px]:mb-3 max-sm:my-6">
            <Button text="shop halloween" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Halloween;

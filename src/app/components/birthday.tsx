import React from "react";
import Image from "next/image";
import Button from "./button";
const Birthday = () => {
  return (
    <section className="mt-20">
      <div className="relative flex justify-center items-center max-sm:flex-col max-lg:items-center max-lg:justify-center">
        <Image
          width="1300"
          height="100"
          src="/Images/birthday.jpg"
          className="w-full h-[75vh] max-sm:hidden"
          alt=""
        />
        <Image
          width="1300"
          height="100"
          src="/Images/birthday-mobile.webp"
          className="h-[75vh] hidden max-sm:block max-sm:w-full max-sm:h-auto"
          alt=""
        />

        <div className="absolute pt-0 pr-32 pb-8 pl-16 left-[42rem]  max-sm:bg-customPeach max-sm:static max-[478px]:py-4 max-[478px]:px-7 max-sm:py-6 max-sm:px-10 max-sm:text-center max-sm:w-full max-lg:left-[25rem] max-lg:pl-16 max-lg:pr-10">
          <p className="text-5xl italic max-[478px]:text-3xl max-sm:text-4xl">
            happy birthday
          </p>
          <p className="mt-5 text-lg max-sm:text-base">
            Sent a bouquet of happiness for their special day
          </p>
          <div className="mt-5 max-[478px]:mb-3 max-sm:my-6">
            <Button text="shop birthday" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Birthday;

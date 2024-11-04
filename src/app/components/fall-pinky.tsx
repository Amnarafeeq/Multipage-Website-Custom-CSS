import Image from "next/image";
import React from "react";
import Button from "./button";

const FallPinky = () => {
  return (
    <section className="mt-32 flex max-sm:flex-col max-[478px]:my-10 max-[478px]:mx-0">
      <div className="relative flex justify-center">
        <Image
          width="650"
          height="100"
          src="/Images/fall.jpg"
          className="w-screen h-[70vh] max-[478px]:w-full"
          alt=""
        />
        <div className="absolute pt-12 pr-20 pl-16 max-sm:mx-auto max-sm:text-center">
          <p className="italic text-5xl max-[478px]:text-3xl max-sm:text-4xl">
            fall is here
          </p>
          <p className="mt-5 text-lg max-[478px]:text-base max-sm:text-base max-lg:text-lg">
            Bold blooms that capture the best the season has to offer{" "}
          </p>
          <div className="mt-6">
            <Button text="shop fall" />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <Image
          width="650"
          height="100"
          src="/Images/pinky.jpg"
          className="w-screen h-[70vh] max-[478px]:w-full"
          alt=""
        />
        <div className="absolute pt-12 pr-20 pl-12 text-center max-[478px]:px-12 max-lg:pt-8 max-lg:px-14">
          <p className="italic text-5xl max-[478px]:text-3xl max-lg:text-4xl">
            breast cancer awareness month
          </p>
          <p className="mt-5 text-lg max-[478px]:text-base max-lg:text-lg max-lg:mt-3">
            Help raise awareness for breast research & support those impacted
            with our pink collection.
          </p>
          <div className="mt-6">
            <Button text="shop fall" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FallPinky;

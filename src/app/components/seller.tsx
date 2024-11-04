import React from "react";
import Image from "next/image";

const Seller = () => {
  return (
    <section>
      <h1 className="text-center italic p-16 text-5xl font-normal max-[478px]:text-3xl max-[478px]:p-9 max-lg:text-4xl max-sm:p-12 max-lg:p-14">
        the best sellers
      </h1>
      <div className="flex justify-evenly mx-20 max-[478px]:gap-2 max-[478px]:my-3 max-[478px]:mx-0 max-[478px]:flex-wrap max-lg:flex-wrap max-sm:my-4 max-lg:my-6 max-sm:mx-0 max-lg:mx-2 max-sm:gap-y-7 max-lg:gap-y-9 ">
        <div className="flex flex-col gap-4 w-60 max-[478px]:w-36 max-[478px]:h-auto max-sm:w-48 max-lg:w-56 max-lg:h-auto">
          <Image
            width="230"
            height="240"
            className="rounded-2xl  "
            src="/Images/seller-img-1.webp"
            alt=""
          />
          <div
            className="font-bold max-[478px]:top-0 max-sm:pt-0 max-sm:pb-4 max-sm:px-2 max-[478px]:text-xs max-lg:text-base 
                                                               "
          >
            <p>Pick of the Patch Pumpkin Bouquet</p>
            <p className="text-red-500 max-sm:py-1">$54 - $72 SALE</p>
            <del>$60 - $80</del>
          </div>
        </div>

        <div className="flex flex-col gap-4  w-60 max-[478px]:w-36 max-[478px]:h-auto max-sm:w-48  max-lg:w-56 max-lg:h-auto">
          <Image
            width="230"
            height="240"
            className="rounded-2xl  "
            src="/Images/seller-img-2.webp"
            alt=""
          />
          <div className="font-bold leading-9 max-[478px]:top-0 max-sm:pt-0 max-sm:pb-4 max-sm:px-2 max-[478px]:text-xs max-lg:text-base">
            <p className="">Sunlit Fall Rose Bouquet</p>
            <p className="text-red-500 max-sm:py-1">$45 - $72 SALE</p>
            <del>$50 - $80</del>
          </div>
        </div>

        <div className="flex flex-col gap-4  w-60 max-[478px]:w-36 max-[478px]:h-auto max-sm:w-48  max-lg:w-56 max-lg:h-auto ">
          <Image
            width="230"
            height="240"
            className="rounded-2xl "
            src="/Images/seller-img-3.webp"
            alt=""
          />
          <div className="font-bold leading-9 max-[478px]:top-0 max-sm:pt-0 max-sm:pb-4 max-sm:px-2 max-[478px]:text-xs max-lg:text-base">
            <p>Botanical Dream Bouquet</p>
            <p className="text-red-500 max-sm:py-1">$49.50 - $67.50 SALE</p>
            <del>$55 - $75</del>
          </div>
        </div>

        <div className="flex flex-col gap-4  w-60 max-[478px]:w-36 max-[478px]:h-auto max-sm:w-48  max-lg:w-56 max-lg:h-auto">
          <Image
            width="230"
            height="240"
            className="rounded-2xl"
            src="/Images/seller-img-4.webp"
            alt=""
          />
          <div className="font-bold leading-9 max-[478px]:top-0 max-sm:pt-0 max-sm:pb-4 max-sm:px-2 max-[478px]:text-xs max-lg:text-base">
            <p>Birthday Bash Bouquet</p>
            <p className="text-red-500 max-sm:py-1">$54 - $72 SALE</p>
            <del>$60 - $80</del>
          </div>
        </div>
      </div>
      <div className="p-20 text-center max-sm:p-10 max-lg:p-12">
        <button className="text-xl p-4 bg-black text-white font-semibold border-2 border-black rounded-3xl hover:bg-btnColor hover:text-black max-sm:p-2 max-lg:text-lg max-lg:p-3 ">
          shopbestsellers
        </button>
      </div>
    </section>
  );
};

export default Seller;

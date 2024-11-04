import Image from "next/image";
import Seller from "./components/seller";
import Halloween from "./components/halloween";
import Birthday from "./components/birthday";
import FallPinky from "./components/fall-pinky";
import Occasions from "./components/occasions";
import TrendyFlowers from "./components/trendy-flower";
import Details from "./components/details";

export default function Home() {
  return (
    <main>
      <section>
        <div className="relative max-md:overflow-hidden flex justify-center items-center">
          <Image
            width="1300"
            height="100"
            src="/Images/home-img.webp"
            className=" w-full max-md:w-full h-auto max-lg:h-auto"
            alt=""
          />
          <div className="absolute top-0 pt-32 pl-20 pr-96 text-xl font-emilys max-sm:top-0 max-[478px]:pt-3 max-[478px]:pb-4 max-sm:px-2 max-[478px]:pr-0 max-sm:text-sm max-sm:pr-20 max-sm:pb-6 max-sm:pt-10  max-lg:pt-16 max-lg:pr-24 max-lg:px-20 ">
            <p className="leading-7  max-[478px]:leading-none max-sm:leading-5 max-lg:leading-6">
              At ProFlowers, we create beautiful, handcrafted floral
              arrangements perfect for every occasion. With fresh blooms and
              same-day delivery, you can easily brighten someone's day with a
              thoughtful, stunning bouquet. Let us help you celebrate life’s
              special moments!
            </p>
          </div>
        </div>
      </section>
      <Seller />
      <Halloween />
      <Birthday />
      <Occasions />
      <FallPinky />
      <TrendyFlowers />
      <Details />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../style.css";
const Footer = () => {
  return (
    <footer className="bg-lightGreen h-auto py-10 px-14 max-sm:h-auto max-[478px]:p-4 max-sm:p-6">
      <h1 className="text-3xl font-semibold italic max-[478px]:text-2xl">
        proflowers
      </h1>
      <div className="mt-10 flex justify-between max-sm:flex-col max-sm:gap-0 max-lg:flex-wrap">
        <div>
          <h3 className="text-xl font-medium my-4 max-sm:p-0 max-sm:m-0 max-sm:text-base">
            Help
          </h3>
          <ul className="text-xl mb-2">
            <li>
              <Link href="#" className="links hover:underline">
                Costumer Service
              </Link>
            </li>
            <li>
              <Link href="#" className="links hover:underline">
                Sitemap
              </Link>
            </li>
          </ul>
          <div>
            <h3 className="text-xl font-medium my-4 max-sm:p-0 max-sm:m-0 max-sm:text-base">
              Account
            </h3>
            <ul className="text-xl mb-2">
              <li>
                <Link href="#" className="links hover:underline">
                  Manage Your Account
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Remainder Service
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  ProPerks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium my-4 max-sm:p-0 max-sm:m-0 max-sm:text-base">
              Company
            </h3>
            <ul className="text-xl mb-2">
              <li>
                <Link href="#" className="links hover:underline">
                  About Proflowers
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Ethical Labor Standards
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Join Our Florist Network
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Proflowers Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium my-4 max-sm:p-0 max-sm:m-0 max-sm:text-base">
            Shop Now
          </h3>
          <div>
            <h2 className="py-4 text-xl font-medium">Flower Delivery</h2>
            <ul className="text-xl mb-2">
              <li>
                <Link href="#" className="links hover:underline">
                  Send Flowers
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Mixed Flower Bouquets
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Same Day Flower Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Roses & Rose Bouquets
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Canada Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  International Delivery
                </Link>
              </li>
            </ul>
            <h2 className="py-4 text-xl font-medium">Plant Delivery</h2>
            <ul className="text-xl mb-2">
              <li>
                <Link href="#" className="links hover:underline">
                  House Plants
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Flowering Plants
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Bonsai & Bamboo
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Succulents
                </Link>
              </li>
            </ul>
            <ul className="text-xl mb-2">
              <h2 className="py-4 text-xl font-medium">Gift Delivery</h2>
              <li>
                <Link href="#" className="links hover:underline">
                  Gift Baskets
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Chocolates
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Fruit Baskets
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium my-4 max-sm:p-0 max-sm:m-0 max-sm:text-base">
            Occasions
          </h3>
          <div>
            <h2 className="py-4 text-xl font-medium">Shop by Occasion</h2>
            <ul className="text-xl mb-2">
              <li>
                <Link href="#" className="links hover:underline">
                  Birthday Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Sympathy Flowers
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Sympathy Plants
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Just Because
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Anniversary
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Congratulations
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Get Well
                </Link>
              </li>
            </ul>
            <h3 className="text-xl font-medium my-4 max-sm:p-0 max-sm:m-0 max-sm:text-base">
              Holidays
            </h3>
            <h2 className="py-4 text-xl font-medium">Shop by Holiday</h2>
            <ul className="text-xl mb-2">
              <li>
                <Link href="#" className="links hover:underline">
                  Valentine's Day
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Easter
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Mother's Day
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Thanksgiving
                </Link>
              </li>
              <li>
                <Link href="#" className="links hover:underline">
                  Christmas
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3
            className="text-xl font-medium my-4 
            max-sm:p-0 max-sm:m-0 max-sm:text-base
            
            "
          >
            Freshen Up Your Inbox
          </h3>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-black p-3 max-sm:p-2 max-sm:mt-1"
            />
            <button className="p-3 bg-black text-white border-2 border-black font-normal hover:bg-lightGreen hover:text-black hover:cursor-pointer max-sm:w-full max-sm:mt-4">
              Sign Up
            </button>
          </div>
          <h3 className="text-xl font-medium my-4 max-sm:p-0 max-sm:my-2 max-sm:text-base">
            Contact
          </h3>
          <p className="text-xl cursor-pointer hover:underline max-sm:text-sm">
            We are here for you 24 hours a day
          </p>
          <ul className="text-xl mb-2">
            <li>
              <Link
                href="#"
                className="list-none hover:underline max-sm:text-sm"
              >
                Track Your Order
              </Link>
            </li>
          </ul>
          <p className="text-xl cursor-pointer hover:underline max-sm:text-base">
            1.800.580.2913
          </p>
          <p className="text-xl cursor-pointer hover:underline max-sm:text-base">
            ADA Help
          </p>
          <div className="flex mt-4 cursor-pointer   max-[360px]:w-16">
            <Image
              width="60"
              height="100"
              src="/Images/proflowers-facebook.svg"
              className="pl-1 max-[360px]:w-10"
              alt=""
            />
            <Image
              width="60"
              height="100"
              src="/Images/proflowers-instagram.svg"
              className=" pl-4 max-[360px]:w-12"
              alt=""
            />
            <Image
              width="60"
              height="100"
              src="/Images/proflowers-twitter.svg"
              className=" pl-4 max-[360px]:w-12"
              alt=""
            />
            <Image
              width="60"
              height="100"
              src="/Images/proflowers-youtube.svg"
              className=" pl-4 max-[360px]:w-12"
              alt=""
            />
            <Image
              width="60"
              height="100"
              src="/Images/proflowers-pinterest.svg"
              className=" pl-4 max-[360px]:w-12"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

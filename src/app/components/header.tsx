import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b-2 border-black">
      <p
        className="font-kalam text-xl text-center bg-lightBeige p-4 
          max-[478px]:text-sm max-sm:text-lg
        "
      >
        10% Off All Items – Discount Applied!
      </p>
      <div className="bg-softCream ">
        <h1
          className="text-center text-5xl italic p-6 
    max-md:text-4xl 
    
    "
        >
          <Link href="/" className="logo">
            proflowers
          </Link>
        </h1>

        <nav>
          <ul
            className="flex text-lg justify-evenly mx-44 mb-3 
       max-sm:text-sm  max-[478px]:justify-around  max-[478px]:mx-4 max-[478px]:gap-2 max-[478px]:flex-wrap
       max-sm:mx-6  max-lg:mx-10"
          >
            <li>
              <Link href="/fall-flowers">Fall</Link>
            </li>
            <li>
              <Link href="/most-popular">Most Popular</Link>
            </li>
            <li>
              <Link href="/birthday">Birthday</Link>
            </li>
            <li>
              <Link href="/sympathy">Sympathy</Link>
            </li>
            <li>
              <Link href="/occasions">Occasions</Link>
            </li>
            <li>
              <Link href="/plants">Plants</Link>
            </li>
            <li>
              <Link href="/gifts">Gifts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

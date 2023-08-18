"use client";

import Image from "next/image";
import React, { useState } from "react";
import Countdown from "react-countdown";

function Ordering() {
  const [cooldown, setCooldown] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center bg-black md:flex-row">
      <div className="flex flex-col justify-center items-center  text-white p-10 border-b-2 border-gray-500 text-center md:border-r-2 md:w-1/2">
        <h1 className="text-4xl font-bold mb-10 md:text-5xl">
          Delicious Burger & French Fry
        </h1>
        <p className="mb-10">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <p className="mb-10 text-yellow-500 text-4xl font-bold">
          {" "}
          <Countdown zeroPadTime={2} date={Date.now() + 20000000} />
        </p>
        <button className="border-1 border-black text-white rounded-md bg-red-500 p-2">
          Add to cart
        </button>
      </div>
      <div className="relative flex justify-center items-center md:w-1/2 ">
        <Image
          className="p-5"
          src="/offerProduct.png"
          alt="burger"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
}

export default Ordering;

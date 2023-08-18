"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function Slider() {
  const text = [
    { text: "ALWAYS FRESH & ALWAYS CRISPY & ALWAYS HOT" },
    { text: "THE BEST PIZZA TO SHARE WITH YOUR FAMILY" },
    { text: "WE DELIVER YOUR ORDER WHEREVER YOU ARE IN PARIS" },
  ];

  const [announceIndex, setAnnounceIndex] = useState(0);
  const [announce, setAnnounce] = useState(text[0].text);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnounceIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [text.length]);

  useEffect(() => {
    setAnnounce(text[announceIndex].text);
  }, [announceIndex]);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row ">
      <div className=" h-1/2 flex flex-col text-red-500 font-bold justify-center items-center bg-red-100 lg:h-full lg:w-1/2">
        <h1 className="text-lg text-center my-20 md:text-2xl lg:text-5xl">
          {announce}
        </h1>
        <button className="border-1 border-black text-white rounded-md bg-red-500 p-2 bottom-20">
          Order now
        </button>
      </div>
      <div className="relative w-full h-1/2 lg:h-full lg:w-1/2">
        <Image
          className="object-cover z-[-1000]"
          src={`/slide${announceIndex}.png`}
          alt={`slide${announceIndex}`}
          fill
        />
      </div>
    </div>
  );
}

export default Slider;

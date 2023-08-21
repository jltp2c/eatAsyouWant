"use client";

import Link from "next/link";
import React from "react";
import { menu } from "../../../data";

function MenuPage() {
  return (
    <div className="flex h-screen flex-col items-center p-20 md:flex-row ">
      {menu.map((item) => {
        return (
          <Link
            key={item.id}
            href={`/menu/${item.slug}`}
            className={`p-5 relative bg-[url('/temporary/m${item.id}.png')] bg-no-repeat bg-cover h-64 md:h-96 md:w-screen  transition-all hover:scale-105 cursor-pointer`}>
            <h1
              className={`font-bold ${
                item.id === 2 ? "text-black-200" : "text-white"
              } text-left text-xl pb-4`}>
              {item.title}
            </h1>
            <p
              className={`${
                item.id === 2 ? "text-gray-500" : "text-white"
              } text-left text-xs w-5/12`}>
              {item.desc}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default MenuPage;

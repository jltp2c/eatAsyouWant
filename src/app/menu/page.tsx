import Link from "next/link";
import React from "react";
import { MenuType } from "@/types/types";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something FAILED fetch");
  }
  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getData();

  return (
    <div className="flex flex-col justify-center  items-center p-10 h-[calc(100vh-11.9rem)] md:flex-row">
      {menu.map((item) => {
        return (
          <Link
            href={`menu/${item.slug}`}
            key={item.id}
            className={`p-5 relative bg-no-repeat bg-cover h-64 md:h-96 md:w-screen transition-all hover:scale-105 cursor-pointer`}
            style={{ backgroundImage: `url(${item.img})` }}>
            <h1 className={`font-bold text-black-200" text-left text-xl pb-4`}>
              {item.title}
            </h1>
            <p className={"text-gray-350 text-left text-xs w-5/12"}>
              {item.desc}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuPage;

import Image from "next/image";
import React from "react";
import { Product } from "../types/types";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something FAILED fetch");
  }
  return res.json();
};

const Items = async () => {
  const itemsMenu: Product[] = await getData();

  return (
    <div className="flex flex-col md:flex-row">
      {itemsMenu.map((item) => (
        <div
          key={item.id}
          className="flex text-center p-10 align items-center flex-col text-red-500 hover:bg-red-100 ">
          {item.img && (
            <Image
              src={item.img}
              alt={item.title}
              width={250}
              height={250}
              className="hover:rotate-90 transition-all duration-300"
            />
          )}
          <h1 className="m-2 font-bold text-lg md:text-xl lg:text-2xl">
            {item.title}
          </h1>
          <p className="m-2">{item.desc}</p>
          <p className="m-2 font-bold text-lg">{item.price}€</p>
          <button className="border-1 border-black text-white rounded-md bg-red-500 p-2 bottom-20">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Items;

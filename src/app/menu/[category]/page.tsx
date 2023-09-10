import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@prisma/client";

interface pageProps {
  params: {
    category: string;
  };
}

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Something FAILED products fetching");
  }
  return res.json();
};

const categoryPage = async ({ params }: pageProps) => {
  const dataProducts: Product[] = await getData(params.category);

  return (
    <div
      className="flex flex-col flex-wrap justify-center text-center items-center
       md:flex-row h-full md:h-[calc(100vh-5.9rem)]">
      {dataProducts.map((item) => (
        <div
          key={item.id}
          className="p-5 border-b-2 border-red-500 md:border-none md:m-5 hover:bg-red-100 group">
          {item.img && (
            <Link href={`/product/${item.id}`}>
              <Image src={item.img} alt={item.title} width={240} height={240} />
            </Link>
          )}
          <div className="flex relative items-center justify-between text-red-500 font-bold">
            <h1 className="uppercase text-xs md:m-5">{item.title}</h1>
            <p>{item.price.toString()}€</p>
            <button className="hidden group-hover:block text-xs text-white rounded-md bg-red-500 p-2 absolute bottom-0 right-0 md:bottom-3 ">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default categoryPage;

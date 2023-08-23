import React from "react";
import { pizzas, pastas, burgers } from "../../../../data";
import Image from "next/image";
import Link from "next/link";

interface pageProps {
  params: {
    category: string;
  };
}

function categoryPage({ params }: pageProps) {
  if (params.category === "pizzas") {
    return (
      <div
        className="flex relative flex-col  justify-center text-center items-center
       md:flex-row flex-wrap md:h-screen">
        {pizzas.map((item) => (
          <div
            key={item.id}
            className="p-5 border-b-2 border-red-500 md:border-none md:m-5 hover:bg-red-100 group">
            {item.img && (
              <Link href={`/product/${item.id}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={240}
                  height={240}
                />
              </Link>
            )}

            <div className="flex relative items-center justify-between text-red-500 font-bold">
              <h1 className="uppercase text-xs md:m-5">{item.title}</h1>
              <p className="">{item.price} €</p>
              <button className="hidden group-hover:block text-xs text-white rounded-md bg-red-500 p-2 absolute bottom-0 right-0 md:bottom-3 ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (params.category === "pastas") {
    return (
      <div
        className="flex flex-col justify-center  h-screen text-center items-center
       md:flex-row flex-wrap">
        {pastas.map((item) => (
          <div
            key={item.id}
            className="p-5 border-b-2 border-red-500 md:border-none md:m-5 hover:bg-red-100 group">
            {item.img && (
              <Link href={`/product/${item.id}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={240}
                  height={240}
                />
              </Link>
            )}

            <div className="flex relative items-center justify-between text-red-500 font-bold">
              <h1 className="uppercase text-xs md:m-5">{item.title}</h1>
              <p className="">{item.price} €</p>
              <button className="hidden group-hover:block text-xs text-white rounded-md bg-red-500 p-2 absolute bottom-0 right-0 md:bottom-3 ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (params.category === "burgers") {
    return (
      <div
        className="flex flex-col justify-center text-center items-center h-screen
       md:flex-row flex-wrap">
        {burgers.map((item) => (
          <div
            key={item.id}
            className="p-5 border-b-2 border-red-500 md:border-none md:m-5 hover:bg-red-100 group">
            {item.img && (
              <Link href={`/product/${item.id}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={240}
                  height={240}
                />
              </Link>
            )}

            <div className="flex relative items-center justify-between text-red-500 font-bold">
              <h1 className="uppercase text-xs md:m-5">{item.title}</h1>
              <p className="">{item.price} €</p>
              <button className="hidden group-hover:block text-xs text-white rounded-md bg-red-500 p-2 absolute bottom-0 right-0 md:bottom-3 ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default categoryPage;

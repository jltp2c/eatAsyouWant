import React from "react";
import { pizzas, pastas, burgers } from "../../../../data";
import Image from "next/image";

interface pageProduct {
  params: {
    id: number;
  };
}

function SingleProduct({ params }: pageProduct) {
  return (
    <div className="md:h-screen">
      {/* PIZZAS */}
      {pizzas.map((item) => (
        <div key={item.id} className="flex flex-row md:justify-center m-5">
          {item.id === parseInt(params.id) && (
            <div className="flex flex-col justify-center md:w-3/4">
              {item.img && (
                <Image
                  className="m-auto md:mt-10"
                  src={item.img}
                  alt={item.title}
                  width={240}
                  height={240}
                />
              )}
              <div className="md:text-center">
                <h1 className="mt-5 mb-5 uppercase text-red-500 font-bold">
                  {item.title}
                </h1>
                <p className="mb-5 text-red-500">{item.desc}</p>
                <p className="mb-5 text-red-500 font-bold">{item.price} €</p>
                <div className="flex justify-center gap-10 md:gap-20">
                  {item.options?.map((option) => (
                    <div key={option.title}>
                      <button className="text-red-500 rounded-md border-2 border-red-500 p-2 bottom-20 ">
                        {option.title}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center m-5">
                  <input
                    className="border-2 border-red-400 number:ml-2 placeholder:p-2 "
                    placeholder="Quantity"
                    type="number"
                  />
                  <button className="text-white bg-red-500 border-red-500 p-2 bottom-20">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* PASTAS */}
      {pastas.map((item) => (
        <div key={item.id} className="flex flex-row md:justify-center m-5">
          {item.id === parseInt(params.id) && (
            <div className="flex flex-col justify-center md:w-3/4">
              {item.img && (
                <Image
                  className="m-auto md:mt-10"
                  src={item.img}
                  alt={item.title}
                  width={240}
                  height={240}
                />
              )}
              <div className="md:text-center">
                <h1 className="mt-5 mb-5 uppercase text-red-500 font-bold">
                  {item.title}
                </h1>
                <p className="mb-5 text-red-500">{item.desc}</p>
                <p className="mb-5 text-red-500 font-bold">{item.price} €</p>
                <div className="md:flex md:justify-center md:items-center gap-10">
                  <div className="flex justify-center gap-10 md:gap-20">
                    {item.options?.map((option) => (
                      <div key={option.title}>
                        <button className="text-red-500 rounded-md border-2 border-red-500 p-2 bottom-20 ">
                          {option.title}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center m-5">
                    <input
                      className="border-2 border-red-400 number:ml-2 placeholder:p-2 "
                      placeholder="Quantity"
                      type="number"
                    />
                    <button className="text-white bg-red-500 border-red-500 p-2 bottom-20">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Burgers */}
      {burgers.map((item) => (
        <div key={item.id} className="flex flex-row md:justify-center m-5">
          {item.id === parseInt(params.id) && (
            <div className="flex flex-col justify-center md:w-3/4">
              {item.img && (
                <Image
                  className="m-auto md:mt-10"
                  src={item.img}
                  alt={item.title}
                  width={240}
                  height={240}
                />
              )}
              <div className="md:text-center">
                <h1 className="mt-5 mb-5 uppercase text-red-500 font-bold">
                  {item.title}
                </h1>
                <p className="mb-5 text-red-500">{item.desc}</p>
                <p className="mb-5 text-red-500 font-bold">{item.price} €</p>
                <div className="flex justify-center gap-10 md:gap-20">
                  {item.options?.map((option) => (
                    <div key={option.title}>
                      <button className="text-red-500 rounded-md border-2 border-red-500 p-2 bottom-20 ">
                        {option.title}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center m-5">
                  <input
                    className="border-2 border-red-400 number:ml-2 placeholder:p-2 "
                    placeholder="Quantity"
                    type="number"
                  />
                  <button className="text-white bg-red-500 border-red-500 p-2 bottom-20">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SingleProduct;

"use client";

import React from "react";
import { pizzas, pastas, burgers } from "../../../../../data";
import Image from "next/image";
import { useState, useEffect } from "react";

interface pageProps {
  params: {
    category: string;
    id: number;
  };
}

function findProductById(id: number) {
  // Recherchez le produit dans les différents tableaux
  const allProducts = [...pizzas, ...pastas, ...burgers];
  return allProducts.find((product) => product.id === id);
}

function SingleProduct({ params }: pageProps) {
  const product = findProductById(parseInt(params.id));

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-10.9rem)] p-5 md:flex-row">
      {product?.img && (
        <Image
          src={product?.img}
          alt={product?.title}
          width={260}
          height={260}
          className="mb-5 md:m-5 md:h-96 md:w-96"
        />
      )}
      <div className="w-5/6 md:w-2/6">
        <h1 className="mb-5 text-red-500 font-bold">{product?.title}</h1>
        <p className="mb-5 text-red-500">{product?.desc}</p>
        <p className="mb-5 text-red-500 font-bold">{product?.price} €</p>
        <div className="mb-10 flex justify-center gap-12 ">
          {product?.options?.map((option) => (
            <button
              className="bg-white p-2 text-black border-2 border-red-500 rounded-xl "
              key={option.title}>
              {option.title}
            </button>
          ))}
        </div>
        <div className="flex justify-center 5">
          <input
            type="number"
            placeholder="Quantity"
            className="border-2 border-red-500 placeholder:pl-2 w-56 md:w-96"
            max={9}
            min={1}
          />
          <button className="bg-red-500 p-2 text-white rounded-sm">
            Add in cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

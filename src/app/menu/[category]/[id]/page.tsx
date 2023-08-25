"use client";

import React from "react";
import { pizzas, pastas, burgers } from "../../../../../data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { title } from "process";

interface pageProps {
  params: {
    category: string;
    id: number;
  };
}

type ProductProps = {
  price: number;
  options?: { title: string; additionalPrice: number }[];
  additionalPrice: number;
};

function findProductById(id: number) {
  // Recherchez le produit dans les différents tableaux
  const allProducts = [...pizzas, ...pastas, ...burgers];
  return allProducts.find((product) => product.id === id);
}

function SingleProduct({ params }: pageProps) {
  const product = findProductById(parseInt(params.id));

  const [total, setTotal] = useState(product?.price);
  const [quantity, setQuantity] = useState(1);
  const [isSelected, setIsSelected] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (product) {
      const selectedOption = product.options
        ? product.options[isSelected]
        : undefined;

      const optionPrice = selectedOption ? selectedOption.additionalPrice : 0;

      setTotal(quantity * (product.price + optionPrice || product.price));
    }
  }, [product, isSelected, quantity]);

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
        <p className="mb-5 text-red-500 font-bold">{total?.toFixed(2)} €</p>
        <div className="mb-10 flex justify-center gap-12 ">
          {product?.options?.map((option, index) => (
            <button
              className="bg-white p-2 text-black border-2 border-red-500 rounded-xl "
              key={option.title}
              style={{
                background: isSelected === index ? "red" : "white",
                color: isSelected === index ? "white" : "red",
              }}
              onClick={() => setIsSelected(index)}>
              {option.title}
            </button>
          ))}
        </div>
        <div className="flex justify-center 5">
          <input
            type="number"
            placeholder="Quantity"
            className="border-2 border-red-500 placeholder:pl-2 w-56 md:w-96 p-2"
            max="9"
            min="1"
            defaultValue="1"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            onKeyDown={handleKeyDown}
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

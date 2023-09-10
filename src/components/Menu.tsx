"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { useCartStore } from "@/utils/store";

function Menu() {
  const menu = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const user = false;

  return (
    <div className="text-xl font-bold">
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Image
            src="/close.png"
            width={20}
            height={20}
            alt="close"
            className="cursor-pointer"
          />
        ) : (
          <Image
            src="/open.png"
            width={20}
            height={20}
            alt="open"
            className="cursor-pointer"
          />
        )}
      </div>
      {isOpen && (
        <div className="bg-red-500 flex flex-col justify-center items-center space-y-14 absolute  left-0 top-[102px] h-[calc(100vh-5.9rem)] w-screen">
          {menu.map((item) => (
            <Link
              className="text-white uppercase"
              key={item.id}
              href={item.url}
              onClick={() => setIsOpen(false)}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link
              className="text-white uppercase"
              href="/login"
              onClick={() => setIsOpen(false)}>
              Login
            </Link>
          ) : (
            <Link
              className="text-white uppercase"
              href="/orders "
              onClick={() => setIsOpen(false)}>
              Orders
            </Link>
          )}
          <Link
            href={"/cart"}
            className="flex items-center text-white "
            onClick={() => setIsOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;

import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

export const Navbar = () => {
  const user = false;

  return (
    <div className="h-14 border-b-2 border-red-500 flex items-center justify-between px-5">
      <div className="hidden md:flex flex-row gap-8 text-red-500">
        <Link href={"/"}>Homepage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* LOGO */}
      <Link className="text-red-500 font-bold" href="/">
        EatAsYouWant
      </Link>
      <div className="flex">
        <Image src="/phone.png" width={20} height={20} alt="phone" />
        <span>06 00 55 55 55</span>
      </div>
      <div className="hidden md:flex flex-row gap-8 text-red-500">
        {user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <Link href={"/cart"} className="flex text-red-500">
          <CartIcon />
          <span>(3)</span>
        </Link>
      </div>
      {/* Mobile view */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

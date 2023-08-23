import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex text-red-500 items-center justify-between text-xs m-2 md:text-xl ">
      <Link href="/" className="font-bold text-xl">
        EatAsYouWant
      </Link>
      <span>© ALL RIGHTS RESERVED.</span>
    </div>
  );
}

export default Footer;

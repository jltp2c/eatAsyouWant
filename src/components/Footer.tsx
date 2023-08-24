import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex text-red-500 items-center justify-between mt-5 text-xs md:text-sm pr-2">
      <Link href="/" className="font-bold text-xl m-2">
        EatAsYouWant
      </Link>
      <span>© ALL RIGHTS RESERVED.</span>
    </div>
  );
}

export default Footer;

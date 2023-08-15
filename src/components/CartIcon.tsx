import React from "react";
import Link from "next/link";
import Image from "next/image";

function CartIcon() {
  return (
    <Link href={"/cart"} className="flex items-center text-white">
      <div className="relative w-8 h-8">
        <Image src="/cart.png" alt="cart" className="p-1" fill />
      </div>
      Cart(3)
    </Link>
  );
}

export default CartIcon;

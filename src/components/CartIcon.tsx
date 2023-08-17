import React from "react";
import Image from "next/image";

function CartIcon() {
  return (
    <div className="relative w-8 h-8">
      <Image src="/cart.png" alt="cart" className="absolute  top-0 p-1" fill />
    </div>
  );
}

export default CartIcon;

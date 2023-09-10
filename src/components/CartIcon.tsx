"use client";

import React, { useEffect } from "react";

import { useCartStore } from "@/utils/store";

function CartIcon() {
  const { totalItems } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  return (
    <div className="relative flex justify-center w-8 h-8">
      <span>Cart({totalItems})</span>
    </div>
  );
}

export default CartIcon;

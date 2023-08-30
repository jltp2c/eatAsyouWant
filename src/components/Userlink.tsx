"use client";

import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function Userlink() {
  const { data, status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href={"/orders"}>Orders</Link>
          <span className="cursor-pointer ml-5" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
}

export default Userlink;

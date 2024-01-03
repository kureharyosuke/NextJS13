"use client";

import Link from "next/link";
import { NextPage } from "next";

export const NotFound: NextPage = () => {
  return (
    <div>
      <p>Sorry, Not Found Page</p>
      <Link href={"/search"}>Search</Link>
    </div>
  );
};

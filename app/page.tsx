import Link from "next/link";
import React from "react";
import ProductCard from "../components/ProductCard";
import MealsPage from "./meals/page";
import CommunityPage from "./community/page";
import HeaderMain from "@/components/HeaderMain";

export default async function Home() {
  console.log("Hello World");
  return (
    <>
      {/* <Link href="/users">Users</Link> */}
      <Link href="/meals">Meals Page</Link>
      <Link href="/meals/share">Share meals Page</Link>
      <Link href="/community">Community Page</Link>
      <Link href="/chartTab">Chart Tab</Link>
      {/* <ProductCard /> */}
      {/* <MealsPage /> */}
      {/* <CommunityPage /> */}
    </>
  );
}

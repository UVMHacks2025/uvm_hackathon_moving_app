"use client";

import Footer from "@/components/Footer";
import ItemList from "@/components/itemList/ItemList";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} />
      <ItemList searchTerm={searchTerm} />
    </>
  );
}

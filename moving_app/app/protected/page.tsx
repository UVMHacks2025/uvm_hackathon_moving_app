"use client";

import ItemList from "@/components/itemList/ItemList";
import NavbarAUTH from "@/components/NavbarAUTH";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <NavbarAUTH setSearchTerm={setSearchTerm} />
      <ItemList searchTerm={searchTerm} />
    </>
  );
}

'use client';

import { ProfileCard } from "@/components/profileCard/profile-card";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ItemList from "@/components/itemList/ItemList";

export default function Bio({items, setSearchTerm}) {
  
  return <div>
    <NavBar setSearchTerm={setSearchTerm}/>
    <ProfileCard/>
    <ItemList />
  </div>
}

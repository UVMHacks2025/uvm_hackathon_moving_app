import Navbar from "/components/Navbar";
import ItemList from "/components/ItemList";
import { useState } from "react";

export default function AppPage(){
    return ( 
        <>
            <Navbar />
            <ItemList />
        </>
    );
}
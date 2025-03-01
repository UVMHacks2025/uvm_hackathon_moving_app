import Footer from "@/components/Footer";
import ItemList from "@/components/itemList/ItemList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="mx-80">
        <ItemList searchTerm={"modern"} />
      </div>
    </>
  );
}

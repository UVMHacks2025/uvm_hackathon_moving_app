import ItemCard from "../itemCard/ItemCard";
import data from "@/lib/seed.json";

export default function ItemList({ searchTerm }: { searchTerm?: string }) {
  let listingsFiltered = data.items;
  if (searchTerm) {
    listingsFiltered = listingsFiltered.filter((item) =>
      item.tags.includes(searchTerm)
    );
  }

  const items = listingsFiltered.map((listing) => (
    <ItemCard key={listing.id} listing={listing} />
  ));

  return <div className="gap-y-8">{items}</div>;
}

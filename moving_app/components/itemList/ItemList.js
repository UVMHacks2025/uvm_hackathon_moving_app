import ItemCard from "../itemCard/ItemCard";
//import listings from "../../lib/item-listings.json";
import seed from "../../lib/seed.json";

export default function ItemList({ searchTerm }) {
  let listingsTemp = [...seed.items];
  let userInfo = [...seed.users];
  if (searchTerm) {
    listingsTemp = listingsTemp.filter(
      (listing) =>
        listing.tags.includes(searchTerm) || listing.name === searchTerm
    );
  }

  const items = listingsTemp.map((listing) => {
    let user = userInfo.find((element) => element.id === listing.sellerId);
    return (
      <ItemCard
        users={seed.users}
        key={listing.id}
        listing={listing}
        userInfo={user}
      />
    );
  });
  return <div className="container flex flex-col gap-y-8 px-8">{items}</div>;
}

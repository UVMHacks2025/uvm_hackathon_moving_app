import ItemCard from "../itemCard/ItemCard";
//import listings from "../../lib/item-listings.json";
import seed from "../../lib/seed.json";

export default function ItemList({searchTerm}){
    let listingsTemp = [...seed.items];
    if (searchTerm) {
        listingsTemp = listingsTemp.filter((listing) => listing.tags.includes(searchTerm));
    }
    

    const items = listingsTemp.map((listing) => (
        <ItemCard
            key={listing.id}
            users={seed.users}
            listing={listing}
        />
    ));

    return (
        <div>
            <ul>{items}</ul>
        </div>
    )

}
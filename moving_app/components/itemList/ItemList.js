import ItemCard from "../itemCard/ItemCard";
import listings from "../../lib/item-listings.json";

export default function ItemList({searchTerm}){
    let listingsTemp = [...listings];
    if (searchTerm) {
        listingsTemp = listings.filter((listing) => listing.tags.includes(searchTerm));
    }
    

    const items = listingsTemp.map((listing) => (
        <ItemCard
            key={listing.id}
            listing={listing}
        />
    ));

    return (
        <div>
            <ul>{items}</ul>
        </div>
    )

}
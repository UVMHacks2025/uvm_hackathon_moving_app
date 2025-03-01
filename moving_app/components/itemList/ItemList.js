import ItemCard from "../itemCard/ItemCard";
import listings from "../../lib/item-listings.json";

export default function ItemList({searchTerm}){
    
    const items = listings.map((listing) => (
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
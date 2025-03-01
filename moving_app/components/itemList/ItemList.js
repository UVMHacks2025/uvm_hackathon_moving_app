import ItemCard from "../itemCard/ItemCard";
import listings from "../../lib/item-listings.json";

export default function ItemList(){
    
    const items = listings.map((listing) => (
        <ItemCard
            listing={listing}
        />
    ));

    return (
        <div>
            <ul>{items}</ul>
        </div>
    )

}
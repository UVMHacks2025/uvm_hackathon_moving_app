// import ItemCard from "../itemCard/ItemCard";
// import data from "@/lib/seed.json";

// export default function ItemList({ searchTerm }: { searchTerm?: string }) {
//   let listingsFiltered = data.items;
//   if (searchTerm) {
//     listingsFiltered = listingsFiltered.filter((item) =>
//       item.tags.includes(searchTerm)
//     );
//   }

//   const users = data.users;

//   const items = listingsFiltered.map((listing) => {
//     const user = users.filter((user) => {
//       if (user.id == listing.sellerId) {
//         console.log("here");
//         return user;
//       }
//     })[0];

//     console.log(listing);
//     console.log(user);
//     return (
//       <ItemCard
//         key={listing.id}
//         listing={listing}
//         userInfo={{ email: user.email, name: user.name }}
//       />
//     );
//   });

//   return <div className="gap-y-8">{items}</div>;
// }

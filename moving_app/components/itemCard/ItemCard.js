import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//import { useState } from "react";

export default function ItemCard({ users, listing }) {
  //const [name] = useState(null);
  const name = "Couch";
  const imgURL =
    "https://t4.ftcdn.net/jpg/00/29/79/51/360_F_29795157_gLLeeTiFDsqno207woilLAq0jeOyOqdu.jpg";
  const value = 100;
  const itemDescrip = "This is a couch.";

  

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{listing.name}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <img src={listing.photo} alt="Item Image" />
          <p>Price: ${listing.price}</p>
          <p>{listing.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Contact Seller</Button>
          <Button variant="outline">Add to Liked</Button>
        </CardFooter>
      </Card>
    </>
  );
}

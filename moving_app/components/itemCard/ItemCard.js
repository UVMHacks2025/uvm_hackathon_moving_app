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

export default function ItemCard({ listing }) {
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
          <img src={listing.imgURL} alt="Item Image" />
          <p>Price: ${listing.value}</p>
          <p>{listing.itemDescrip}</p>
        </CardContent>
        {listing.tags.length > 0 && (
          <CardContent>
            <p className="text-sm text-gray-500">Tags:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {listing.tags.map((tag, index) => (
                tag && <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded">{tag}</span>
              ))}
            </div>
          </CardContent>
        )}
        <CardFooter>
          <Button>Contact {listing.owner}</Button>
        </CardFooter>
      </Card>
    </>
  );
}

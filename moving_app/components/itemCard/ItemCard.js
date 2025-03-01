import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ItemCard({ users, listing, userInfo }) {
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
          <Button
            onClick={() => (window.location.href = `mailto:${userInfo.email}`)}
          >
            Contact {userInfo.name}
          </Button>
          <Button variant="outline">Add to Liked</Button>
        </CardFooter>
      </Card>
    </>
  );
}

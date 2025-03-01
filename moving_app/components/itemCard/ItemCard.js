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
          <img src={listing.photo} alt="Item Image" width="200" height="200"/>
          <p>Price: ${listing.price}</p>
          <p>{listing.description}</p>
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
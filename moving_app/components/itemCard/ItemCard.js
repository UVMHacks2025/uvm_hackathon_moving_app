"use client";
import { useState } from "react";
import { ProfileCard } from "@/components/profileCard/profile-card";

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
  const [showProfile, setShowProfile] = useState(false);
  let contactButtonStyle = showProfile ? "flex justify-between ml-10" : "flex-col";

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{listing.name}</CardTitle>
          <CardDescription>
            <p>Price: ${listing.price}</p>
            <p>{listing.description}</p>
          </CardDescription>
        </CardHeader>
        <CardContent className={contactButtonStyle}>
          <img src={listing.photo} alt="Item Image" max="200" height="200"/>
          <div className={contactButtonStyle}>{showProfile ? <ProfileCard user={userInfo} /> : <></>}</div>
        </CardContent>
        {listing.tags.length > 0 && (
          <CardContent>
            <p className="text-sm text-gray-500">Tags:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {listing.tags.map(
                (tag, index) =>
                  tag && (
                    <span
                      key={index}
                      className="bg-gray-100 px-2 py-1 text-xs rounded"
                    >
                      {tag}
                    </span>
                  )
              )}
            </div>
          </CardContent>
        )}
        <CardFooter className="flex justify-between">
          <div>
            {!showProfile ? <Button onClick={() => setShowProfile(true)}>Contact</Button> : <></>}
          </div>
          <Button variant="outline">Add to Liked</Button>
        </CardFooter>
      </Card>
    </>
  );
}

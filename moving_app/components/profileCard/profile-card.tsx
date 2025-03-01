import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";

const imageLink =
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"; // Direct image URL

// Define the user type
type User = {
  name: string;
  bio: string;
  email: string;
};

// Extend CardProps to include user data
type ProfileCardProps = React.ComponentProps<typeof Card> & {
  user: User;
};

export function ProfileCard({ className, user, ...props }: ProfileCardProps) {
  console.log(user);
  return (
    <Card className={cn("w-[380px] p-4", className)} {...props}>
      <CardHeader className="text-center">
        <img
          src={imageLink}
          alt={`${user.name}'s profile`}
          className="w-24 h-24 rounded-full mx-auto mb-2"
        />
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.bio}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Button onClick={() => (window.location.href = `mailto:${user.email}`)}>
          Contact {user.name}
        </Button>
      </CardContent>
    </Card>
  );
}

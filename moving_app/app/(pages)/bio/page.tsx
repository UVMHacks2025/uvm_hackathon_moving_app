"use client";

import { ProfileCard } from "@/components/profileCard/profile-card";
import NavBar from "@/components/Navbar";
import data from "@/lib/seed.json";

export default function Bio() {
  const user = {
    "name": "Noah Rizika",
    "email": "nrizika@middlebury.edu",
    "id": 1738,
    "bio": "I am a student at Middlebury College! I love to play soccer and I often enjoy painting in my free time. Unfortunately I am graduating so I need to sell my stuff. I am open to pricing negotiation!",
    "savedItems": ["item1", "item2", "item3", "item4"]
  }

  return (
    <div>
      <NavBar setSearchTerm={""} />
      <div className="justify-center flex">
        {<ProfileCard user={user} />}
        </div>
    </div>
  );
}

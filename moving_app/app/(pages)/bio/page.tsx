"use client";

import { ProfileCard } from "@/components/profileCard/profile-card";
import NavBar from "@/components/Navbar";

export default function Bio() {
  return (
    <div>
      <NavBar setSearchTerm={""} />
      <div className="justify-center flex">{/* <ProfileCard user=1 /> */}</div>
    </div>
  );
}

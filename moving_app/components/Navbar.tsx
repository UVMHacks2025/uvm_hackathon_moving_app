import Login from "@/app/(auth-pages)/sign-in/page";
import Link from "next/link";
import { ProfileButton } from "@/components/profileButton/profile-button";

export default function Navbar({ setSearchTerm }) {
  return (
    <div className="py-8 px-8 ">
      <div className="py-2 flex justify-between items-center">
        <input
          className="font-semibold px-4 py-2 rounded-lg shadow-md border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-400 outline-none"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-x-8">
          <Link
            href="/home"
            className="text-green-700 font-semibold hover:underline"
          >
            MarketPlace7
          </Link>
          <Link
            href="/bio"
            className="text-green-700 font-semibold hover:underline"
          >
            Profile
          </Link>
          <Link
            href="/make-post"
            className="text-green-700 font-semibold hover:underline"
          >
            Make a Post
          </Link>

          <Link
            href="/sign-in"
            className="text-green-700 font-semibold hover:underline"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="text-green-700 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

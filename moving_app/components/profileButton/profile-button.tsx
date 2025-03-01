/**
 * profile button for redirecting from a page
 * a user's profile page
 * - uses shadcn button
 *
 */

import { useRouter } from "next/router";
import { Button, buttonVariants } from "@/components/ui/button";

export function ProfileButton() {
    return <a href={'/bio'}>
        <Button variant='ghost' size='icon'>
            Profile
        </Button>
    </a>
}
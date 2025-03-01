/**
 * 
 * profile card displays user information:
 * - name
 * - bio
 * - contact info:
 *      - email
 *      - phone
 * 
 */

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../ui/card"

const imageLink = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ADefault_pfp.jpg&psig=AOvVaw1o7QtQeKeSGCj_EJHzkQ2z&ust=1740935627766000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDV896w6YsDFQAAAAAdAAAAABAE"
  
type CardProps = React.ComponentProps<typeof Card>
export function ProfileCard({ className, ...props }: CardProps) {
    return (
    <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
        <CardTitle>User</CardTitle>
        <img src={imageLink}/>
        </CardHeader>
        <CardContent className="grid gap-4">
        <div>Hi my name is Quinn. I am based out of Middlebury, Atlantis and am in the market for more fish. Just for the halibut!</div>
        </CardContent>
        <CardFooter>qotto@atlantis.sea - (555)555-555</CardFooter>
    </Card>
    )
}    

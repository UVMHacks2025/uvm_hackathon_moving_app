import { ProfileButton } from "./profileButton/profile-button";
import { useRouter } from "next/router";

export default function Navbar({setSearchTerm}){
    return(
        <>
            <div>
                <input 
                    type="text" 
                    placeholder="Search" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <a href="/home">
                    <h1>Marketplace7</h1>
                </a>
                <ProfileButton/>
            </div>
        </>
    );
}
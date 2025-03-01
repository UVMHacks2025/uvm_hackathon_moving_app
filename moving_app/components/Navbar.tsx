import styles from "./Navbar.module.css";
import SearchBar from "/components/SearchBar";
import SellButton from "/components/SellButton";
import Profile from "/app/(pages)/Profile/pages";

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <SearchBar />
            <SellButton />
            <Profile />
        </div>
    );
}
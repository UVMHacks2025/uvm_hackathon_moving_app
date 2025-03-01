export default function Navbar({ setSearchTerm }){
    return(
        <>
            <div>
                <input 
                    type="text" 
                    placeholder="Search" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </>
    );
}
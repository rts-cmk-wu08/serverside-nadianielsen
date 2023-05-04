"use client"
import useShowDropdown from "../hooks/useDropDown";
import NavBar from "./NavBar";


const Header = () => {

    const { ref, showDropdown, setShowDropdown} = useShowDropdown(false)

    return ( 
        <header ref={ref} className="w-full h-20 bg-white sticky top-0 dark:bg-black z-50">
            <NavBar showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>
        </header>
     );
}
 
export default Header;
"use client"
import Link from "next/link";
import { useState } from "react";



const NavBar = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const handleMenuToggle = () => setIsOpen(!isOpen)

    return ( 
        <nav className="flex justify-center py-6 pr-20 text-center">
            <div className="flex gap-x-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/blogs"}>Blogs</Link>
            <Link href={"/contact"}>Contact</Link>
            </div>
            <Link href={"/"} className="font-semibold text-xl mx-20">SWANKY.</Link>
            <div className="flex gap-x-10 ">
            <Link href={"/"}>Login</Link>
            <Link href={"/"}>Search</Link>
            <Link href={"/"}>(0)</Link>
            <Link href={"/"}>(0)</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;
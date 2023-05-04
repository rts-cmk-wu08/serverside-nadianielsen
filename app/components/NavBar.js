"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa"
import { AiFillHeart } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri"


const NavBar = ({showDropdown, setShowDropdown}) => {

  const handleMenuToggle = () => setShowDropdown(!showDropdown)
    
  const router = useRouter()

  useEffect(() => {
      setShowDropdown(false)
  }, [router]);

  return ( 
      <>
    <div className="w-full h-20 flex items-center justify-between md:hidden">
      <Link href={"/"} className="font-semibold text-xl p-4">SWANKY.</Link>
      <RiMenu4Fill className="md:hidden cursor-pointer mr-2 text-2xl text-black" onClick={handleMenuToggle} />
    </div>
      <nav className={` ${showDropdown ? "flex" : "hidden"} absolute top-full left-0 bg-[#EC6C5A]/75 backdrop-blur-sm w-screen py-4 flex-col gap-5 items-center md:bg-transparent md:static md:w-auto md:flex-row md:justify-evenly md:pr-24 md:py-5 md:flex`}>
      <Link href={"/"} className="hover:underline hover:font-bold transition-all">Home</Link>
      <Link href={"/"} className="hover:underline hover:font-bold transition-all">About</Link>
      <Link href={"/"} className="hover:underline hover:font-bold transition-all">Shop</Link>
      <Link href={"/blogs"} className="hover:underline hover:font-bold transition-all">Blogs</Link>
      <Link href={"/contact"} className="hover:underline hover:font-bold transition-all">Contact</Link>
      <Link href={"/"} className="font-semibold text-xl mx-28 hidden md:block transition-all">SWANKY.</Link>
      <Link href={"/"} className="hover:underline hover:font-bold transition-all">Login</Link>
      <Link href={"/"} className="hover:underline hover:font-bold transition-all">Search</Link>
      <Link href={"/"} className="hidden md:flex gap-x-1"><AiFillHeart  className="mt-1"/>(0)</Link>
      <Link href={"/"} className="hidden md:flex gap-x-1"><FaShoppingCart  className="mt-1"/>(0)</Link>
      </nav>
      </>
   );
}
 
export default NavBar;

{/* <>
<div className="w-full h-20 flex items-center justify-between md:hidden">
    <Link href={"/"} className="font-semibold text-xl p-4">SWANKY.</Link>
    <HiOutlineBars3BottomRight className="cursor-pointer text-4xl mr-5" onClick={handleMenuToggle}/>
</div>
<nav className={` ${isOpen ? "flex" : "hidden"} absolute top-full left-0 bg-[#EC6C5A]/75 backdrop-blur-[2px] w-screen py-4 flex-col gap-5 items-center md:bg-transparent md:static md:w-full md:flex-row md:flex md:justify-center md:pt-6 md:pr-28`}>
<div className="flex gap-x-10">
  <Link href={"/"}>Home</Link>
  <Link href={"/"}>About</Link>
  <Link href={"/"}>Shop</Link>
  <Link href={"/blogs"}>Blogs</Link>
  <Link href={"/contact"}>Contact</Link>
  </div>
  <Link href={"/"} className="font-semibold text-xl mx-20 hidden md:block">SWANKY.</Link>
  <div className="flex gap-x-10 ">
  <Link href={"/"}>Login</Link>
  <Link href={"/"}>Search</Link>
  <Link href={"/"} className="hidden md:block">(0)</Link>
  <Link href={"/"} className="hidden md:block">(0)</Link>
  </div>        </nav>
</> */}

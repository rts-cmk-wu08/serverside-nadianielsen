import Link from "next/link";
import { IoSendSharp } from "react-icons/io5"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return ( 
        <footer className="w-full h-[24rem]">
            <article className="grid grid-cols-4 grid-rows-2 mt-14">
                <article className="pl-4 flex flex-col gap-y-2">
                <Link href={"/"} className="font-semibold text-2xl">SWANKY.</Link>
                <p className="w-52">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A perspiciatis maxime nulla, ipsa aperiam amet.</p>
                <div className="flex">
                    <input type="email" name="email" id="email" className="bg-transparent border-b-2 border-black w-60" placeholder="Enter your email address..."/>
                    <IoSendSharp className="relative right-5 top-1 text-[#EC6C5A]"/>
                </div>
                <div className="flex text-xl gap-x-3 text-[#C0BAB9]">
                    <FaFacebookF className="hover:text-[#EC6C5A] transition-all"/>
                    <FaInstagram className="hover:text-[#EC6C5A] transition-all"/>
                    <FaTwitter className="hover:text-[#EC6C5A] transition-all"/>
                    <FaLinkedinIn className="hover:text-[#EC6C5A] transition-all"/>
                    <FaYoutube className="hover:text-[#EC6C5A] transition-all"/>
                </div>
                </article>
            <article className="font-semibold uppercase flex flex-col gap-y-2.5">
                <h2 className="capitalize text-xl">Quick links</h2>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Shop</Link>
                <Link href={"/blogs"}>Blogs</Link>
                <Link href={"/contact"}>Contact</Link>
            </article>
            <article className="uppercase font-semibold flex flex-col gap-y-2.5">            
                <h2 className="capitalize font-bold text-xl">Help & info</h2>
                <p>Track your order</p>
                <p>returns policies</p>
                <p>shipping + delivery</p>
                <p>contact us</p>
                <p>faqs</p>
            </article>
            <article className="flex flex-col gap-y-5">
                <h2 className="capitalize font-bold text-xl">Contact us</h2>
                <p className="text-[#7a7a7a]">Do you have any queries or suggestions</p>
                <p className="underline font-semibold">yourinfo@gmail.com</p>
                <p className="text-[#7a7a7a]">If you need support? Just give us a call</p>
                <p className="underline font-semibold">+55 111 222 333 44</p>
            </article>
            <span className="border-t w-full col-span-4 self-end mb-20"></span>
            </article>
        </footer>
     );
}
 
export default Footer;
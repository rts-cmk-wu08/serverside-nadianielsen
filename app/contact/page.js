import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io"

const Contact = () => {
    return ( 
        <main className="flex flex-col">
            <div className="w-full h-[22rem] bg-neutral-300 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Contact</h1>
                <div className="flex gap-x-2 pt-4">
                <Link href={"/"}>Home</Link>
                    <IoIosArrowForward className="mt-[0.3rem]"/>
                <Link href={"/contact"} className="underline">Contact</Link>
                </div>
            </div>
            <article className="grid grid-cols-2 grid-rows-2 gap-2 my-4">
                <article className="px-32 py-2 flex flex-col gap-y-5">
                    <h2 className="capitalize font-bold text-3xl">Contact info</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nostrum dolores eveniet aspernatur voluptatem nisi!</p>
                    <div className="flex gap-x-20 font-bold text-xl">
                        <h3>Office</h3>
                        <h3 className="underline">Management</h3>
                    </div>
                    {/* <article className="flex">
                        <p className="capitalize">730 glenstone ave 65802, springfield, us</p>
                        <p>+123 222 333 44</p>
                        <p>+123 666 777 88</p>
                        <p>swanky@yourinfo.com</p>
                        <p className="capitalize underline">730 glenstone ave 65802, springfield, us</p>
                        <p>+123 222 333 44</p>
                        <p>+123 666 777 88</p>
                        <p>swanky@yourinfo.com</p>
                    </article> */}
                </article>
                <article className="px-20 py-2">
                    <h2 className="capitalize font-bold text-3xl">Any questions?</h2>
                </article>
                    <div className="w-[38rem] h-[34rem] bg-neutral-300 ml-32"></div>
                <article>
                    <h2 className="capitalize font-bold text-3xl pl-20">Our stores</h2>
                </article>
            </article>
        </main>
     );
}
 
export default Contact;
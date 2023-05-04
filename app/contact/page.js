import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io"

const Contact = () => {
    return ( 
        <main className="flex flex-col">
            <div className="w-full h-[22rem] bg-neutral-300 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-white">Contact</h1>
                <div className="flex gap-x-2 pt-4 text-white">
                <Link href={"/"}>Home</Link>
                    <IoIosArrowForward className="mt-[0.3rem]"/>
                <Link href={"/contact"} className="underline">Contact</Link>
                </div>
            </div>
            <article className="grid grid-cols-2 grid-rows-2 my-4">
                <article className="px-32 py-2 flex flex-col gap-y-5 self-center">
                    <h2 className="capitalize font-bold text-3xl">Contact info</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nostrum dolores eveniet aspernatur voluptatem nisi!</p>
                    <div className="grid grid-cols-2 grid-rows-2">
                        <h3 className="font-bold text-xl">Office</h3>
                        <h3 className="underline font-bold text-xl">Management</h3>
                        <p className="capitalize">730 glenstone ave 65802, springfield, us</p>
                        <p className="capitalize">730 glenstone ave 65802, springfield, us</p>
                        <p>+123 222 333 44</p>
                        <p>+123 666 777 88</p>
                        <p>+123 222 333 44</p>
                        <p>+123 666 777 88</p>
                        <p>swanky@yourinfo.com</p>
                        <p>swanky@yourinfo.com</p>
                    </div>
                </article>
                <article className="px-20 py-2 self-center">
                    <h2 className="capitalize font-bold text-3xl">Any questions?</h2>
                    <form action="" className="grid grid-cols-2 gap-4">
                        <input type="text" name="name" id="name" className="dark:border-white w-full h-10 bg-transparent border-b-2 border-black capitalize" placeholder="Full name"/>
                        <input type="email" name="email" id="email" className="dark:border-white w-[18.5rem] h-10 bg-transparent border-b-2 border-black capitalize" placeholder="Write your email here *"/>
                        <input type="number" name="phone" id="phone" className="dark:border-white col-span-2 h-10 bg-transparent border-b-2 border-black" placeholder="Phone number"/>
                        <input type="text" name="subject" id="subject" className="dark:border-white col-span-2 h-10 bg-transparent border-b-2 border-black capitalize" placeholder="Write your subject here"/>
                        <textarea name="message" id="message" cols="30" rows="10"  placeholder="Write your message here *" className="dark:border-white capitalize col-span-2 h-10 bg-transparent border-b-2 border-black"></textarea>
                        <button type="submit" className="bg-black dark:bg-white dark:text-black w-[12rem] h-12 text-white">Submit</button>
                    </form>
                </article>
                    <div className="w-[38rem] h-[34rem] bg-neutral-300 ml-32 my-2"></div>
                <article className="grid grid-cols-2 grid-rows-2 justify-self-center">
                    <div className="col-span-2 self-center">
                        <h2 className="capitalize font-bold text-3xl">Our stores</h2>
                        <p className="text-[#737373]">You can also directly buy products from our stores.</p>
                    </div>
                    <div>
                        <h3 className="uppercase underline font-bold flex flex-col gap-y-3">usa</h3>
                        <p className="capitalize text-[#737373]">730 glenstone ave 65802, springfield, us</p>
                        <p className="text-[#737373]">+123 222 333 44</p>
                        <p className="text-[#737373]">+123 666 777 88</p>
                        <p className="text-[#737373]">swanky@yourinfo.com</p>
                    </div>
                    <div className="ml-2">
                        <h3 className="uppercase underline font-bold flex flex-col">france</h3>
                        <p className="capitalize text-[#737373]">730 glenstone ave 65802, springfield, us</p>
                        <p className="text-[#737373]">+123 222 333 44</p>
                        <p className="text-[#737373]">+123 666 777 88</p>
                        <p className="text-[#737373]">swanky@yourinfo.com</p>
                    </div>
                </article>
            </article>
        </main>
     );
}
 
export default Contact;
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io"

const Blogs = () => {

    const result =

    return ( 
        <main className="grid grid-rows-2">
            <div className="w-full h-[22rem] bg-neutral-300 flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl">Blog</h1>
                <div className="flex gap-x-2 pt-4">
                    <Link href={"/"}>Home</Link>
                    <IoIosArrowForward className="mt-[0.3rem]"/>
                    <Link href={"/blog"} className="underline">Blog</Link>
                </div>
            </div>
            <article className="grid grid-cols-3 grid-rows-2">

            </article>
        </main>
     );
}
 
export default Blogs;
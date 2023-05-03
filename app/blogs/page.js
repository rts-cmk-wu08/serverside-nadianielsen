import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io"

//isr - incremental static regeneration
const getPosts = async () => {
    const result = await fetch ("https://swanky-api.onrender.com/posts", {next: {revalidate: 30}})

    if(!result.ok) { throw new Error("Failed to fetch data")}

    return result.json()
}

const Blogs = async () => {

  const posts = await getPosts()
//   console.log(posts)

    return ( 
        <main className="flex flex-col gap-y-20 mb-6">
            <div className="w-full h-[22rem] bg-neutral-300 flex flex-col justify-center items-center text-white row-start-1">
                <h1 className="text-4xl font-bold">Blog</h1>
                <div className="flex gap-x-2 pt-4">
                    <Link href={"/"}>Home</Link>
                    <IoIosArrowForward className="mt-[0.3rem]"/>
                    <Link href={"/blogs"} className="underline">Blog</Link>
                </div>
            </div>
            <article className="grid grid-cols-3 grid-rows-2 gap-y-5" >
                {posts.map(post => (
                    <Link href={`/blogs/${post.id}`} className="mx-4">
                        <div className="w-[30rem] h-[24rem] bg-neutral-300"> 
                        </div>
                        <h2>{post.title}</h2>
                        <p>{post.subtitle}</p>
                        
                    </Link>
                ))}
            </article>
        </main>
     );
}
 
export default Blogs;
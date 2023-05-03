import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

//ssg - static site generation

const getDetail = async (blogsid) => {
    const result = await fetch(`https://swanky-api.onrender.com/posts/${blogsid}`)

    if(!result.ok) {throw new Error("Failed to fetch album!")}

    return result.json()

}

const BlogDetail = async ({params: {blogsid}}) => {

    const detail = await getDetail(blogsid)
    // console.log(detail)

    return ( 
        <main className="flex flex-col">
            <div className="w-full h-[14rem] bg-[#F1E4E1] flex flex-col justify-center items-center">
            <h1 className="text-4xl capitalize font-bold">Blog detail</h1>
                <div className="flex gap-x-2 pt-4">
                    <Link href={"/"}>Home</Link>
                    <IoIosArrowForward className="mt-[0.3rem]"/>
                    <Link href={"/blogs"} className="underline">Blog</Link>
                    <IoIosArrowForward className="mt-[0.3rem]"/>
                    <Link href={`/blogs/${blogsid}`} className="underline capitalize">Blog detail</Link>
                </div>
            </div>
            <article className="grid grid-row-6 gap-y-10 my-4">
                <div className="pt-6 pl-16">
                    <p className="text-sm"><span className="underline">Fashion</span>/July 2022</p>
                    <h2 className="font-bold text-3xl pt-4">{detail.title}</h2>
                </div>
                <div className="w-[88rem] h-[45rem] bg-neutral-300 justify-self-center"></div>
                <p className="px-16">{detail.subtitle}</p>
                <p className="px-16 text-[#7a7a7a]">{detail.text}</p>
                <div className="w-[36rem] h-[25rem] bg-neutral-300 ml-16"></div>
            </article>
        </main>
     );
}
 
export default BlogDetail;
import Image from "next/image"
import { FaTruck } from "react-icons/fa"
import { AiOutlineShopping } from "react-icons/ai"
import { MdCardGiftcard } from "react-icons/md"

const getStarted = async () => {
  const result = await fetch ("https://swanky-api.onrender.com/started", {next: {revalidate: 30}})

  if(!result.ok) { throw new Error("Failed to fetch data")}

  return result.json()
}
 
const getOffers = async () => {
  const result = await fetch ("https://swanky-api.onrender.com/offers", {next: {revalidate: 30}})

  if(!result.ok) { throw new Error("Failed to fetch data")}

  return result.json()
}
 
const getProducts = async () => {
  const result = await fetch ("https://swanky-api.onrender.com/products", {next: {revalidate: 30}})

  if(!result.ok) { throw new Error("Failed to fetch data")}

  return result.json()
}
 


export default async function Home() {

  const starteds = await getStarted()
  const offers = await getOffers()
  const products = await getProducts()

  return (
    <main className="mb-4 flex flex-col">
      <div className="w-full h-[42rem] bg-[#F1E4E1] relative">
        <Image src="/charlesdeluvio-GsKf0FXVj3Y-unsplash.jpg" width={1000} height={1000} className="absolute w-full h-full object-cover" alt="Orange beanie"/>
        {offers.map((offer, index) => {
          if (index < 1 ) return (
            <div className="flex flex-col items-end my-44 relative gap-y-4">
              <h1 className="text-5xl font-bold pr-32">{offer.headline}</h1>
              <p className="w-[30%] pr-20 text-neutral-800 dark:text-white">{offer.text}</p>
              <button className="bg-black w-32 h-10 text-white mr-[20.8rem]">Shop now</button>
            </div>
          ) 
        })}
      </div>
       <article className="flex justify-center flex-col items-center my-10">
          <h2 className="capitalize font-bold text-3xl">Our products</h2>
          <div className="flex gap-x-4 my-2">
            <h3 className="font-bold text-[#737373] hover:text-black hover:underline transition-all capitalize dark:text-white dark:hover:text-neutral-300">Trending now</h3>
            <h3 className="font-bold text-[#737373] hover:text-black hover:underline transition-all capitalize dark:text-white dark:hover:text-neutral-300">New arrivals</h3>
            <h3 className="font-bold text-[#737373] hover:text-black hover:underline transition-all capitalize dark:text-white dark:hover:text-neutral-300">Best sellers</h3>
          </div>
          <article className="grid grid-cols-4 gap-4 my-6">
            {products.map((product, index) => (
              <article>
              <div className="w-[21rem] h-[26rem] bg-neutral-300 relative">
                <Image width={1000} height={1000} src={`/image-${index}.jpg`} className="absolute object-cover w-full h-full"/>
              </div>
              <div className="flex flex-col justify-center items-center mt-1">
                <h3 className="hover:underline font-bold text-xl">{product.name}</h3>
                <p className="text-[#EC6C5A]">${product.price}.00</p>
              </div>
              </article>
            ))}
          </article>
          <button className="capitalize text-white bg-black px-12 py-2 my-4">Shop all</button>
          <article className="grid grid-cols-2 mx-10 my-16">
            <div className="w-[44rem] h-[42rem] bg-black dark:bg-neutral-200 relative">
              <Image width={1000} height={1000} src="/arno-senoner-ZT16YkAYueo-unsplash.jpg" className="absolute w-full h-full object-cover"/>
            </div>
              <article>
                {starteds && (
                  <div>
                    <h2 className="text-4xl w-[50%] font-bold pt-16">{starteds.headline}</h2>
                    <p className="w-[80%] pt-5">{starteds.text}</p>
                  </div>
            )}
            {starteds.bullets.map(bullet => (
              <div className="ml-12 mt-10">
                <h3 className="flex flex-col gap-y-10 font-semibold text-xl ">{bullet.name}</h3>
                <p className="text-[#737373]">{bullet.text}</p>
              </div>
            ))} 
            <div className="text-4xl flex flex-col gap-y-14 relative bottom-60 text-[#EC6C5A]">
              <FaTruck />
              <AiOutlineShopping />
              <MdCardGiftcard />
            </div>
              </article>
           
          </article>
       </article>
    </main>
  )
}

import Link from "next/link";


export default function NotFound() {
    return (
        <main className="m-10 flex flex-col gap-y-4">
            <h1 className="capitalize text-4xl font-bold m-auto">Sorry! page not found</h1>
            <p className="text-sm m-auto">Sorry, page that you're searching for doesn't exist.</p>
            <Link href={"/"} className="bg-black text-white w-32 h-6 text-center m-auto">Go to Home</Link>
        </main>
    )
}
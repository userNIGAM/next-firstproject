import Link from "next/link";

export default function Navbar (){
    return(
        <>
            <div>
                <nav>
                    <ul className="flex grid-cols-4 gap-5 justify-end py-3 mx-8">
                        <li className="text-blue-600 hover:underline text-xl font-medium "><Link href="/">Home</Link></li>
                        <li className="text-blue-600 hover:underline text-xl font-medium "><Link href="/contacts">Contacts</Link></li>
                        <li className="text-blue-600 hover:underline text-xl font-medium "><Link href="/about">About</Link></li>
                        <li className="text-blue-600 hover:underline text-xl font-medium "><Link href="/login">signup</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
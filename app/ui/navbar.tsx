'use client';
import Image from 'next/image'
import Link from "next/link";
export default function Navbar() {
    const token = localStorage.getItem('token');
    return <nav className="flex text-white justify-between items-center border-b border-gray-800">
        <div>
            <Link className="px-4 hover:text-[#B54548] active:text-[#B54548] flex items-center dongle-regular-title" href="/">
                <Image src="/assets/place_holder_logo.png" alt="Logo GameStack" width={70} height={50}/>
                <p className="mt-2">GameStack</p>
            </Link>
        </div>
        <ul className="flex mr-6 text-3xl">
            <li>
                <Link className="px-4 hover:text-[#B54548] active:text-[#B54548]" href="/search">Search</Link>
            </li>
            <li>
                <Link className="px-4 hover:text-[#B54548] active:text-[#B54548]" href="#">Contact</Link>
            </li>
            <li>
                {token ? (
                    <>
                    <Link className="px-4 hover:text-[#B54548] active:text-[#B54548]" href="/auth/logout">Logout</Link> <Link className="px-4 hover:text-[#B54548] active:text-[#B54548]" href="/profil">Profil</Link>
                    </>
                ) : (
                    <Link className="px-4 hover:text-[#B54548] active:text-[#B54548]" href="/auth/login">Login</Link>
                )}
            </li>
        </ul>
    </nav>
}

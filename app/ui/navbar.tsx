'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from "next/link";
import { IoClose, IoMenu } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return <nav className="flex text-white justify-between items-center border-b border-gray-800">
        <div>
            <Link className="px-4 hover:text-[#B54548] active:text-[#B54548] flex items-center dongle-regular-title" href="/">
                <Image src="/assets/place_holder_logo.png" alt="Logo GameStack" width={70} height={50}/>
                <p className="mt-2">GameStack</p>
            </Link>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-4xl focus:outline-none">
                <IoMenu />
            </button>
        </div>
        <ul className={`flex-col text-3xl md:flex-row flex md:items-center absolute md:static md:bg-transparent w-full md:w-auto transition-transform transform ${isMenuOpen ? 'translate-x-0 bg-gray-900 items-center py-12' : '-translate-x-full'} md:translate-x-0`}>
            <li className="my-2 pt-52 md:py-0 md:my-0">
                <Link className={`px-4 hover:text-[#B54548] ${pathname === '/search/game' ? 'text-[#B54548]' : ''}`} href="/search/game">Search</Link>
            </li>
            <li className="my-2 md:my-0">
                <Link className={`px-4 hover:text-[#B54548] ${pathname === '/contact' ? 'text-[#B54548]' : ''}`} href="/contact">Contact</Link>
            </li>
                {token ? (
                    <>
                    <li className="my-2 md:my-0">
                        <Link className={`px-4 hover:text-[#B54548] ${pathname === '/profil' ? 'text-[#B54548]' : ''}`} href="/profil">Profil</Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link className="px-4 hover:text-[#B54548] active:text-[#B54548]" href="/auth/logout">Logout</Link> 
                    </li>
                    </>
                ) : (
                    <li className="my-2 md:my-0">
                        <Link className={`px-4 hover:text-[#B54548] ${pathname === '/auth/login' ? 'text-[#B54548]' : ''}`} href="/auth/login">Login</Link>
                    </li>
                )}
            <button onClick={toggleMenu} className="text-4xl focus:outline-none md:hidden hover:text-red-500">
                <IoClose />
            </button>
        </ul>
    </nav>
}

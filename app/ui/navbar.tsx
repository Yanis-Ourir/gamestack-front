import Image from 'next/image'
export default function Navbar() {
    return <nav className="flex text-white justify-between items-center">
        <div className="flex items-center dongle-regular-title">
            <Image src="/assets/place_holder_logo.png" alt="Logo GameStack" width={100} height={50}/>
            <p>GameStack</p>
        </div>
        <ul className="flex mr-6">
            <li><a className="px-4" href="/">Home</a></li>
            <li><a className="px-4" href="/about">About</a></li>
            <li><a className="px-4" href="/contact">Contact</a></li>
        </ul>
    </nav>
}

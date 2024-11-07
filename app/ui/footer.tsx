import Link from "next/link";

export default function Footer() {
    return <footer className="bg-footer-bg w-full bottom-0 p-4 text-2xl">
        <div className="p-2">
            <div className="text-white flex gap-2 mb-4">
                <Link href="/privacy-policy" className="hover:text-red-400">Privacy Policy</Link> -
                <Link href="/contact" className="hover:text-red-400">Contact</Link> -
                <Link href="/legal-mentions" className="hover:text-red-400">Legals Mentions</Link>
            </div>
            <p className="text-gray-500 mb-0">© Copyright - Yanis OURIR - 2024 GameStack</p>
        </div>
    </footer>
}

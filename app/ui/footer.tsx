import Link from "next/link";

export default function Footer() {
    return <footer className="bg-footer-bg w-full fixed bottom-0 p-4">
        <div className="p-2">
            <div className="text-white flex gap-2 mb-4">
                <Link href="#">A propos</Link> -
                <Link href="#">Contact</Link> -
                <Link href="#">Mentions légales</Link>
            </div>
            <p className="text-gray-500 mb-0">© Copyright - Yanis OURIR - 2024 GameStack</p>
        </div>
    </footer>
}

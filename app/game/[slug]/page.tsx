'use client';
import { useParams } from "next/navigation";
import Image from "next/image";
import { IoGameControllerOutline } from "react-icons/io5";
import Link from "next/link";

export default function GamePage() {
    const params = useParams();

    return (
        <>
            <section id="game-stats">
                <div className="flex p-4 mt-[2rem] justify-center">
                    <div className="text-white text-2xl">
                        <h1 className="dongle-regular-title">Statistiques</h1>
                        {/* <p className="text-gray-500">Note de la communauté: <span className="text-red-600 text-6xl">{game?.rating}</span></p> */}
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src={"/assets/static_images/graphic_placeholder.png"} alt={"Graphique de statistiques"} width={1000} height={500} />
                </div>
            </section>
            <Link href={`/game/${params.slug}/create-evaluation`} className="bg-gradient-to-r from-[#C31432] to-purple-800 text-white w-fit px-4 rounded-full flex gap-3 text-xl items-center">
                <IoGameControllerOutline /> Ajouter un avis
            </Link>
        </>
    );
}
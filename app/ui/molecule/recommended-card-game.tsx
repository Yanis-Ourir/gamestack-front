import Image from "next/image";
import { GameDetailsProps } from "./game-details";
import Link from "next/link";


export default function RecommendedCardGame(game: GameDetailsProps) {
    return (
        <Link href={"/game/" + game.slug}>
            <div className="rounded-lg shadow-md bg-slate-800 hover:shadow-xl hover:cursor-pointer hover:bg-slate-700 w-64 h-72">
                <Image src={game.image ? game.image : ""} alt={game.name} width={256} height={100} className="object-cover object-center rounded-lg"/>
                <div className="p-4">
                    <p className="text-white text-2xl">{game.name}</p>
                    <p className="text-gray-500 text-xl">
                        {game.tags?.join(", ")}
                    </p>
                    <p className="w-fit text-red-400 text-lg">{game.release_date}</p>
                </div>
            </div>
        </Link>
    )
}
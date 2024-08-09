import Link from "next/link";
import Input from "../ui/atoms/input";
import GameDetails from "../ui/molecule/game-details";
import { findTenMostRatedGames } from "../lib/gameCrud";
import { GameDetailsProps } from "../ui/molecule/game-details";

export default async function SearchLayout() {

    const gameList: GameDetailsProps[] = await findTenMostRatedGames();

    return (
        <>
            <section>
                <div className="text-white text-4xl flex justify-around mt-[3rem]">
                    <Link href={"/search"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Jeux</Link>
                    <Link href={"/search/users"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Utilisateurs</Link>
                    <Link href={"/search/lists"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Listes</Link>
                </div>
                <div className="p-4 text-2xl w-1/2">
                    <Input label={"Rechercher"} type={"text"} id={"search"} name={"search"} required={true} className={"input-login text-2xl"}/>
                </div>
            </section>

            <section className="text-2xl text-white p-[2rem]">
                {gameList.map((game, index) => (
                    <GameDetails
                        id={game.id}
                        key={index}
                        name={game.name}
                        image={game.image}
                        platforms={game.platforms}
                        tags={game?.tags}
                        release_date={game.release_date}
                        rating={game.rating}
                    />
                ))} 
            </section>
        </>
    )
}
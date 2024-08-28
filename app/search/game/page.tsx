import { findTenMostRatedGames } from "@/app/lib/gameCrud";
import GameDetails, { GameDetailsProps } from "@/app/ui/molecule/game-details";

export default async function GameSearch() {
    const gameList: GameDetailsProps[] = await findTenMostRatedGames();
    return (
        <>
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
        </>
    )
}
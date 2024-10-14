import { findGamesRecommendation } from "@/app/lib/gameCrud";
import { GameDetailsProps } from "../molecule/game-details";
import RecommendedCardGame from "../molecule/recommended-card-game";
import { use, useEffect, useState } from "react";


export default function RecommendedGames() {
    const [recommendedGames, setRecommendedGames] = useState<GameDetailsProps[]>([]);
    
    useEffect(() => {
        async function fetchGames() {
            const games = await findGamesRecommendation();
            setRecommendedGames(games);
        }
        fetchGames();
    }, []);

    return (
        <div className="flex flex-col items-center md:flex-row gap-3 md:gap-1">
          {recommendedGames.map((game, index) => (
            <RecommendedCardGame key={index} {...game} />
            ))}
        </div>
    );
}
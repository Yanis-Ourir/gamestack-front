import { findGamesRecommendation } from "@/app/lib/gameCrud";
import { GameDetailsProps } from "../molecule/game-details";
import RecommendedCardGame from "../molecule/recommended-card-game";
import { useEffect, useState } from "react";
import { getToken } from "@/app/lib/checkToken";

export default function RecommendedGames() {
    const [recommendedGames, setRecommendedGames] = useState<GameDetailsProps[]>([]);
    
    useEffect(() => {
        const token = getToken();
        async function fetchGames() {
            if (!token) {
                return;
            }
            const games = await findGamesRecommendation(token.id);
            setRecommendedGames(games);
        }
        fetchGames();
    }, []);

    return (
        <>
            <h5 className="dongle-regular-title mb-[3rem]">Recommended Games</h5>
            <div className="flex flex-col items-center md:flex-row gap-3 md:gap-1">
                {recommendedGames.length > 0 ? (
                    recommendedGames.map((game, index) => (
                        <RecommendedCardGame key={index} {...game} />
                    ))
                ) : (
                    <p>No recommended games available. Try to evaluate games before</p>
                )}
            </div>
        </>
    );
}
import { findGamesRecommendation } from "@/app/lib/gameCrud";
import { GameDetailsProps } from "../molecule/game-details";
import RecommendedCardGame from "../molecule/recommended-card-game";

export default async function RecommendedGames() {
    const recommendedGames: GameDetailsProps[] = await findGamesRecommendation();

    return (
        <div className="flex flex-col bg-white m-auto p-auto">
          {recommendedGames.map((game) => (
                <RecommendedCardGame/>
            )
        )}
        </div>
    );
}
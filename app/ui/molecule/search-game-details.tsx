import { useEffect, useState } from "react";
import { findBySearch } from "@/app/lib/gameCrud";
import Loader from "./loader";
import GameDetails, { GameDetailsProps } from "./game-details";

interface SearchGameDetailsProps {
    gameName: string;
}

export default function SearchGameDetails({ gameName }: SearchGameDetailsProps) {
    const [games, setGames] = useState<GameDetailsProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGame = async () => {
            setLoading(true);
            setError(null);
            try {
                const game = await findBySearch(gameName);
                setGames(game);
            } catch (err) {
                setError('No game found');
            } finally {
                setLoading(false);
            }
        };

        if (gameName) {
            fetchGame();
        }
    }, [gameName]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            {error && <p>{error}</p>}
            {games.length > 0 && games.map((game, index) => (
                <GameDetails
                    key={index}
                    id={game.id}
                    name={game.name}
                    image={game.image}
                    platforms={game.platforms}
                    tags={game.tags}
                    slug={game.slug}
                    release_date={game.release_date}
                    rating={game.rating}
                />
            ))}
        </div>
    );
}

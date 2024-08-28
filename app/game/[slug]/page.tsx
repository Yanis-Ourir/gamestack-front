'use client';
import { findByGameSlug } from "@/app/lib/gameCrud";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import GameDetails, { GameDetailsProps } from "@/app/ui/molecule/game-details";
import Image from "next/image";
import Tag from "@/app/ui/molecule/tag";

export default function GamePage() {
    const [game, setGame] = useState<GameDetailsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const game = await findByGameSlug(params.slug);
                console.log(game);
                setGame(game);
            } catch (err) {
                setError('Failed to fetch game details');
            } finally {
                setLoading(false);
            }
        };

        fetchGame();
    }, [params.slug]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section id="game-details" className="flex p-4 mt-[2rem]">
            <Image src="/assets/static_images/GFR.png" alt={game?.name || 'Game Image'} width={150} height={100} />
            <div className="text-white text-2xl px-4">
                <h1 className="dongle-regular-title">{game?.name}</h1>
                <p className="text-gray-500">Date de sortie {game?.release_date}</p>
                <div className="flex gap-3 mb-4">
                    {game?.platforms.map((platform, index) => (
                        // <Tag key={index} tagName={platform.tagName} icon={platform.icon} />
                        <p key={index}>{platform}</p>
                    ))}
                </div>
                <p>
                    {game?.tags.join(", ")}
                </p>
                <p className="text-gray-500">{game?.description}</p>
            </div>
        </section>
    );
}
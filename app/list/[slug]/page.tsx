'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import GameDetails from "@/app/ui/molecule/game-details";
import { useParams } from "next/navigation";
import { findListById, ListData, removeGameFromList } from "@/app/lib/listCrud";
import Loader from "@/app/ui/molecule/loader";
import GameReview, { GameReviewProps } from "@/app/ui/molecule/game-reviews";
import SuccessMessage from "@/app/ui/atoms/success-message";
import ErrorMessage from "@/app/ui/atoms/error-message";

export default function List() {
    // NEED TYPING HERE
    const params = useParams();

    const [listDetails, setListDetails] = useState<ListData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [games, setGames] = useState<GameReviewProps[]>([]);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const listsData = await findListById(params.slug);
                setListDetails(listsData);
                setLoading(false);
                setGames(listsData.games);
            } catch (error) {
                console.error("Error fetching list data:", error);
            }
        }
        fetchData();
    }, [params.slug]);

    if (!listDetails) {
        return <Loader />; 
    }

    function handleEdit() {

    }

    async function handleDelete(idGame: string, idList: string) {
        try {
            await removeGameFromList(idGame, idList);
            setGames(games.filter(game => game.id !== idGame));
            setSuccessMessage('Jeux supprimé avec succès');
        } catch (error) {
            console.error('Error deleting list:', error);
            setErrorMessage('Erreur lors de la suppression du jeu');
        }
    }


    return (
        <div>
            <section id={"list-details"} className={"text-2xl text-white flex items-center p-[2rem]"}>
                <Image
                    src={listDetails.image ? `http://localhost:8000/storage/${listDetails.image}` : "/assets/static_images/retro_gaming.jpg"} 
                    alt={"game list video picture"}
                    width={100}
                    height={100}
                />
                <div className={"px-4"}>
                    <h1 className={"dongle-regular-title"}>{listDetails.name}</h1>
                    <div className={"text-white text-2xl text-center flex items-center"}>
                        <Image
                            src={listDetails.user.avatar || "/assets/static_images/icon-default.jpg"} // Fallback for avatar if null
                            alt={"avatar of list owner"}
                            className={"avatar-image"}
                            width={40}
                            height={40}
                        />
                        <p>{listDetails.user.username} - Mis à jour le {new Date(listDetails.updated_at).toLocaleDateString()}</p>
                    </div>
                    <p className={"text-2xl text-gray-500"}>
                        {listDetails.description}
                    </p>
                    <p>
                        Likes {listDetails.likes} - Dislikes {listDetails.dislikes}
                    </p>
                </div>
            </section>
            <section id={"list filter"}>
                <div className={"flex justify-around items-center gap-4 text-white text-4xl my-12"}>
                    <button className={"btn btn-primary"}>Tous</button>
                    <button className={"btn btn-primary"}>Action</button>
                    <button className={"btn btn-primary"}>Aventure</button>
                    <button className={"btn btn-primary"}>RPG</button>
                    <button className={"btn btn-primary"}>FPS</button>
                </div>
            </section>
            {successMessage && (
                <div className="flex justify-center">
                    <SuccessMessage message={successMessage} />
                </div>
            )}

            {errorMessage && (
                <div className="flex justify-center">
                    <ErrorMessage message={errorMessage} />
                </div>
            )}
            
            <section className={"text-2xl text-white p-[2rem]"}>
                {games.length > 0 ? (
                    games.map((game: any, index: number) => (
                        <GameReview
                            idList={listDetails.id}
                            id={game.id}
                            key={index}
                            name={game.name}
                            image={game.image}
                            platforms={game.platforms}
                            tags={game.tags}
                            release_date={game.releaseDate}
                            slug={game.slug}
                            handleEdit={handleEdit}
                            handleDelete={() => handleDelete(game.id, listDetails.id)}
                        />
                    ))
                ) : (
                    <p>No games available in this list.</p>
                )}
            </section>
        </div>
    )
}

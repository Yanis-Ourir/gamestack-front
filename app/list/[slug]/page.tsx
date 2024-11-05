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
import Input from "@/app/ui/atoms/input";
import Checkbox from "@/app/ui/atoms/checkbox";
import addReview from "@/app/lib/reviewCrud";
import LikeDislike from "@/app/ui/form/like-dislike";
import ListHeader from "@/app/ui/organisms/list-header";

export default function List() {
    const params = useParams();
    const [listDetails, setListDetails] = useState<ListData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [games, setGames] = useState<GameReviewProps[]>([]);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [gameId, setGameId] = useState<string | null>(null);

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

    function openModal(id: string) {
        setGameId(id);
        setModal(!modal);
    }

    function closeModal() {
        setModal(!modal);
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        const { reviewGame } = e.target.elements;
        const selectedStatuses = Array.from(e.target.querySelectorAll('input[name="reviewStatus"]:checked')).map((checkbox: any) => checkbox.value);
        console.log(reviewGame.value, selectedStatuses, gameId);

        if(gameId && listDetails) {
            try {
                await addReview({ description: reviewGame.value, gameId, gameListId: listDetails.id, statusId: Number(selectedStatuses[0]) });
                setSuccessMessage('Review ajoutée avec succès');
            } catch (error) {
                console.error('Error adding review:', error);
                setErrorMessage('Erreur lors de l\'ajout de la review');
            }
        }
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
                <ListHeader listDetails={listDetails} />
            </section>
            <section id={"listfilter"}>
                <div className={"flex justify-around items-center gap-4 text-white text-4xl my-12"}>
                    <button className={"btn btn-primary"}>All</button>
                    <button className={"btn btn-primary"}>Action</button>
                    <button className={"btn btn-primary"}>Adventure</button>
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
                            description={game.review[0]?.description}
                            image={game.image}
                            platforms={game.platforms}
                            tags={game.tags}
                            release_date={game.releaseDate}
                            status={game.review[0]?.status}
                            slug={game.slug}
                            handleEdit={() => openModal(game.id)}
                            handleDelete={() => handleDelete(game.id, listDetails.id)}
                        />
                    ))
                ) : (
                    <p>No games available in this list.</p>
                )}
            </section>

            {modal &&
                <section id="modal-list">
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                        <div className="bg-gray-800 w-1/2 p-8 rounded-lg text-white text-2xl">
                            <div className="flex justify-between items-center">
                                <h2 className="text-center text-4xl">Modifier la review de la liste</h2>
                                <button onClick={closeModal} className="text-white hover:text-red-600">X</button>
                            </div>
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

                            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                <p className="text-2xl text-white mt-4">Status : </p>
                                <div id="multiple-selects" className="flex justify-around my-4 gap-4">
                                    <Checkbox type="checkbox" id="review-status" name="reviewStatus" value="1" label={"Complété"} required={false} iconName="IoCheckmarkCircleOutline" textColor="text-green-500" />
                                    <Checkbox type="checkbox" id="review-status" name="reviewStatus" value="2" label={"En cours"} required={false} iconName="IoPlay" />
                                    <Checkbox type="checkbox" id="review-status" name="reviewStatus" value="3" label={"Lâché"} required={false} iconName="IoTrashOutline" textColor="text-red-400" />
                                    <Checkbox type="checkbox" id="review-status" name="reviewStatus" value="4" label={"Souhaite jouer"} required={false} iconName="IoAddCircleOutline" textColor="text-gray-400" />
                                </div>
                                <Input label={"Changer la description"} type={"text"} id={"review-game"} name={"reviewGame"} required={true} className={"input-login"} />
                                <button className="bg-red-500 text-white px-4 py-2 rounded-full">Changer</button>
                            </form>

                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

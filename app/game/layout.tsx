'use client';
import { useEffect, useState } from "react";
import { findByGameSlug } from "../lib/gameCrud";
import { useParams } from "next/navigation";
import { GameDetailsProps, PlatformsProps } from "../ui/molecule/game-details";
import Image from "next/image";
import Tag from "../ui/molecule/tag";
import DynamicIcon from "../ui/atoms/dynamic-icon";
import EvaluationDetails from "../ui/molecule/evaluation-details";
import { addGameToList, findListAndCheckIfGameIsIn, ListData } from "../lib/listCrud";
import Loader from "../ui/molecule/loader";
import SuccessMessage from "../ui/atoms/success-message";
import ErrorMessage from "../ui/atoms/error-message";
import Link from "next/link";
import ListLoader from "../ui/molecule/list-loader";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [game, setGame] = useState<GameDetailsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [platformsTest, setPlatformsTest] = useState<PlatformsProps[] | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [lists, setLists] = useState<ListData[]>([]);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [listLoading, setListLoading] = useState<boolean>(true);
    const params = useParams();

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const game = await findByGameSlug(params.slug);
                console.log(game);
                setGame(game);
                setPlatformsTest(game.platforms);
                console.log(game);
            } catch (err) {
                setError('Failed to fetch game details');
            } finally {
                setLoading(false);
            }
        };

        fetchGame();
    }, [params.slug]);

    if (loading) {
        return <Loader />;
    }


    if (error) {
        return <p>{error}</p>;
    }

    async function modalAddToList() {
        setModal(!modal);
        const listsData = await findListAndCheckIfGameIsIn(game?.id);
        setLists(listsData);
        setListLoading(false);
        console.log(listsData);
    }

    async function addGameToSelectedList(idList: string) {
        if(!game) return;
        try {
            const response = await addGameToList(idList, game.id);
            if(response.error) {
                setErrorMessage(response.error);
                return;
            }
            setSuccessMessage('Jeu ajouté à la liste avec succès');
        } catch (error) {
            console.error('Error adding game to list:', error);
            setErrorMessage('Erreur lors de l\'ajout du jeu à la liste');
        }
    }

    // https://stackoverflow.com/questions/65576629/how-to-render-react-icon-depending-on-string-from-database
    return (
        <div>
            <section id="game-details" className="flex p-4 mt-[2rem]">
                <Image src={game?.image ? game.image : "/assets/static_images/No-Image-Placeholder.png"} alt={game?.name || 'Game Image'} width={500} height={100} />
                <div className="text-white text-2xl px-4">
                    <h1 className="text-3xl md:dongle-regular-title">{game?.name}</h1>
                    <p className="text-gray-500">Release date {game?.release_date}</p>
                    <div className="flex gap-3 mb-4">
                        {platformsTest?.map((platform, index) => (
                            <Tag key={index} name={platform.name} icon={platform.icon} />
                        ))}
                    </div>
                    <p>
                        {game?.tags?.join(", ")}
                    </p>
                    <p className="text-gray-500 hidden md:block">{game?.description}</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full" onClick={modalAddToList}>Add to list</button>
                </div>
            </section>
            {children}

            <section id="game-evaluations" className="mt-[2rem] p-12">
                <div className="flex flex-col gap-12">
                    {game?.evaluations ? game.evaluations.map((evaluation, index) => (
                       <EvaluationDetails key={index} evaluation={evaluation} />
                    )) : (
                        <p className="text-white">This game has no evaluation yet</p>
                    )}
                </div>
            </section>
            
            {modal && 
            <section id="modal-list">
                <div className="fixed top-0 left-0 w-full h-full p-4 md:p-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                        <div className="bg-gray-800 w-fit md:w-1/3 p-8 rounded-lg text-white text-2xl">
                        <div className="flex justify-between items-center gap-4 md:gap-0">
                            <h2 className="text-2xl md:text-4xl text-center">Add {game?.name} to list</h2>
                            <button onClick={modalAddToList} className="text-white rounded-full hover:text-red-500">X</button>
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
                            
                            {listLoading && <ListLoader />}
                        {lists.length > 0 ? lists.map((list, index) => (
                            <div
                                key={index}
                                className={`flex justify-between items-center border-b border-gray-500 p-4 hover:cursor-pointer ${list.is_game_in_list ? 'text-green-400' : 'text-white'} ${list.is_game_in_list ? 'hover:bg-gray-800' : 'hover:bg-gray-700'}`}
                                onClick={() => addGameToSelectedList(list.id)}
                            >
                                <Image
                                    src={list.image ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${list.image}` : '/assets/static_images/retro_gaming.jpg'}
                                    alt="game list from community"
                                    width={70}
                                    height={70}
                                />
                                <p>{list.name}</p>
                                <DynamicIcon icon={list.is_game_in_list ? 'IoCheckmarkCircle' : 'IoAddCircle'} />
                            </div>
                        )) : (
                            <div className="flex flex-col justify-center items-center mt-12">
                                <p className="text-white text-2xl">No list found</p>
                                <Link href="/list/create" className="text-red-400 hover:underline">Create a list</Link>
                            </div>
                        )}
                        
                    </div>
                </div>
            </section>
            }
            
        </div>
    );
}
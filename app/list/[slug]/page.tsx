'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import GameDetails from "@/app/ui/molecule/game-details";
import { useParams } from "next/navigation";
import { findListById } from "@/app/lib/listCrud";

export default function List() {
    // NEED TYPING HERE
    const params = useParams();

    const [listDetails, setListDetails] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const listsData = await findListById(params.slug);
                setListDetails(listsData); 
        
            } catch (error) {
                console.error("Error fetching list data:", error);
            }
        }
        fetchData();
    }, [params.slug]);

    if (!listDetails) {
        return <p>Loading...</p>; 
    }

    return (
        <div>
            <section id={"list-details"} className={"text-2xl text-white flex items-center p-[2rem]"}>
                <Image
                    src={listDetails.image ? `http://localhost:8000/storage/${listDetails.image}` : "/assets/static_images/retro_gaming.jpg"} // Fallback to static image if no image is available
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
                <div className={"flex justify-around items-center gap-4 text-white"}>
                    <button className={"btn btn-primary"}>Tous</button>
                    <button className={"btn btn-primary"}>Action</button>
                    <button className={"btn btn-primary"}>Aventure</button>
                    <button className={"btn btn-primary"}>RPG</button>
                    <button className={"btn btn-primary"}>FPS</button>
                </div>
            </section>
            <section className={"text-2xl text-white p-[2rem]"}>
                {listDetails.games.length > 0 ? (
                    listDetails.games.map((game: any, index: number) => (
                        <GameDetails
                            key={index}
                            name={game.title}
                            image={game.image}
                            platforms={game.platforms}
                            tags={game.genres}
                            release_date={game.releaseDate}
                            rating={game.grade}
                            slug={game.slug}
                        />
                    ))
                ) : (
                    <p>No games available in this list.</p>
                )}
            </section>
        </div>
    )
}

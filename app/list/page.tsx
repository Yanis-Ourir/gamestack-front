import Image from "next/image";
import {IoGameControllerOutline} from "react-icons/io5";
import {CgScreen} from "react-icons/cg";
import React from "react";
import ListDetails from "@/app/ui/molecule/list-details";
import GameDetails from "@/app/ui/molecule/game-details";

export default function List() {
    const platforms = [
        {
            tagName: "PS5",
            icon: <IoGameControllerOutline />
        },
        {
            tagName: "PS4",
            icon: <IoGameControllerOutline />
        },
        {
            tagName: "PC",
            icon: <CgScreen />
        }
    ];

    const gameList = [
        {
            title: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            genres: ["JRPG", "Action", "Fantasy"],
            releaseDate: "Février 2024",
            grade: 9.5
        },
        {
            title: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            genres: ["JRPG", "Action", "Fantasy"],
            releaseDate: "Février 2024",
            grade: 9.5
        },
        {
            title: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            genres: ["JRPG", "Action", "Fantasy"],
            releaseDate: "Février 2024",
            grade: 9.5
        },
        {
            title: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            genres: ["JRPG", "Action", "Fantasy"],
            releaseDate: "Février 2024",
            grade: 9.5
        }
    ];
    return (
        <div>
            <section id={"list-details"} className={"text-2xl text-white flex items-center p-[2rem]"}>
                <Image src={"/assets/static_images/retro_gaming.jpg"} alt={"game list video picture"} width={100} height={100}/>
                <div className={"px-4"}>
                    <h1 className={"dongle-regular-title"}>Classiques incontournables</h1>
                    <div className={"text-white text-2xl text-center flex items-center"}>
                        <Image src={"/assets/static_images/icon-default.jpg"} alt={"avatar of list owner"} className={"avatar-image"} width={40} height={40}/>
                        <p>John Doe - Mis à jour le 12/12/2021</p>
                    </div>
                    <p className={"text-2xl text-gray-500"}>
                        Passionné de jeux vidéo depuis toujours, je suis toujours à la recherche de nouvelles expériences ludiques et immersives.
                        J'adore explorer de nouveaux mondes, relever des défis et découvrir des histoires captivantes.
                    </p>
                    <p>
                        Likes 78 - Dislikes 4
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
                {gameList.map((game, index) => (
                    <GameDetails
                        key={index}
                        title={game.title}
                        image={game.image}
                        platforms={game.platforms}
                        genres={game.genres}
                        releaseDate={game.releaseDate}
                        grade={game.grade}
                    />
                ))}

            </section>
        </div>
    )
}

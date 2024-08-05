import {IoGameControllerOutline} from "react-icons/io5";
import {CgScreen} from "react-icons/cg";
import React from "react";
import GameDetails from "@/app/ui/molecule/game-details";

export default function Reviews() {
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
        <div className={"text-2xl text-white p-[2rem]"}>
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
        </div>
    )
}

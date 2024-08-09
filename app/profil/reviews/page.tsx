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
            name: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            tags: ["JRPG", "Action", "Fantasy"],
            release_date: "Février 2024",
            grade: 9.5
        },
        {
            name: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            tags: ["JRPG", "Action", "Fantasy"],
            release_date: "Février 2024",
            grade: 9.5
        },
        {
            name: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            tags: ["JRPG", "Action", "Fantasy"],
            release_date: "Février 2024",
            grade: 9.5
        },
        {
            name: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            tags: ["JRPG", "Action", "Fantasy"],
            release_date: "Février 2024",
            grade: 9.5
        }
    ];
    return (
        <div className={"text-2xl text-white p-[2rem]"}>
            {gameList.map((game, index) => (
                <GameDetails
                    key={index}
                    name={game.name}
                    image={game.image}
                    platforms={game.platforms}
                    tags={game.tags}
                    release_date={game.release_date}
                    rating={game.grade}
                />
            ))}
        </div>
    )
}

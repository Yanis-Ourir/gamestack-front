import ListDetails from "@/app/ui/molecule/list-details";
import React from "react";

export default function ProfilList() {
    const lists = [
        {
            title: "Classiques incontournables",
            image: "/assets/static_images/retro_gaming.jpg",
            description: "Une liste qui selon moi regorges de jeux à faire absolument...",
            likes: 78,
            updatedAt: "Mis à jour le 04/08/2024",
            avatar: "/assets/static_images/icon-default.jpg",
            username: "John Doe",
            gamesNumber: 15
        },
        {
            title: "Classiques incontournables",
            image: "/assets/static_images/retro_gaming.jpg",
            description: "Une liste qui selon moi regorges de jeux à faire absolument...",
            likes: 78,
            updatedAt: "Mis à jour le 04/08/2024",
            avatar: "/assets/static_images/icon-default.jpg",
            username: "John Doe",
            gamesNumber: 15
        },
        {
            title: "Classiques incontournables",
            image: "/assets/static_images/retro_gaming.jpg",
            description: "Une liste qui selon moi regorges de jeux à faire absolument...",
            likes: 78,
            updatedAt: "Mis à jour le 04/08/2024",
            avatar: "/assets/static_images/icon-default.jpg",
            username: "John Doe",
            gamesNumber: 15
        },
        {
            title: "Classiques incontournables",
            image: "/assets/static_images/retro_gaming.jpg",
            description: "Une liste qui selon moi regorges de jeux à faire absolument...",
            likes: 78,
            updatedAt: "Mis à jour le 04/08/2024",
            avatar: "/assets/static_images/icon-default.jpg",
            username: "John Doe",
            gamesNumber: 15
        }
    ]
    return (
        <div className={"text-2xl text-white p-[2rem]"}>
            {lists.map((list, index) => (
                <ListDetails
                    key={index}
                    title={list.title}
                    description={list.description}
                    image={list.image}
                    likes={list.likes}
                    updatedAt={list.updatedAt}
                    avatar={list.avatar}
                    username={list.username}
                    gamesNumber={list.gamesNumber}
                />
            ))}
        </div>
    )
}

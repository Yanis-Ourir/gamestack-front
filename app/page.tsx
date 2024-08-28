'use client';
import Image from "next/image";
import Tag from "@/app/ui/molecule/tag";
import {IoGameControllerOutline} from "react-icons/io5";
import {CgScreen} from "react-icons/cg";
import GameDetails from "@/app/ui/molecule/game-details";
import React from "react";
import ListDetails from "@/app/ui/molecule/list-details";
import parseJWT from "./lib/parseJWT";
export default function Home() {
    const platforms = [
        {
            name: "PS5",
            icon: <IoGameControllerOutline />
        },
        {
            name: "PS4",
            icon: <IoGameControllerOutline />
        },
        {
            name: "PC",
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
            rating: 9.5
        },
        {
            name: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            tags: ["JRPG", "Action", "Fantasy"],
            release_date: "Février 2024",
            rating: 9.5
        },
        {
            name: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            tags: ["JRPG", "Action", "Fantasy"],
            release_date: "Février 2024",
            rating: 9.5
        },
        {
            name: "Granblue Fantasy Relink",
            image: "/assets/static_images/GFR.png",
            platforms: platforms,
            tags: ["JRPG", "Action", "Fantasy"],
            release_date: "Février 2024",
            rating: 9.5
        }
    ];
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
    const token = localStorage.getItem('token');
    if(token) {
        const payload = parseJWT(token);
        console.log(payload);
    }
  return (
      <>
          <section className="flex justify-center flex-col items-center my-12">
              <h1 className="text-6xl font-medium text-white w-1/2 text-center">Créez, partagez et découvrez les
                  <span
                      className="bg-gradient-to-r from-[#C31432] to-purple-800 bg-clip-text text-transparent"> expériences</span> incroyables
                  de vos
                  <span className="bg-gradient-to-r from-[#C31432] to-purple-800 bg-clip-text text-transparent"> jeux vidéo</span> préférés
              </h1>
              <div className="relative w-full flex justify-center items-center mt-12">
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-800 to-purple-800 blur-2xl rounded-lg w-[70%] h-[105%]"></div>
                  <Image src="/assets/landing-page.jpg" alt="iPhone GameStack video game list" width={1200} height={300} className="relative mt-12"/>
              </div>
            <div className={"mt-24 flex items-center justify-around gap-2"}>
                  <a href="#">
                      <Image src={"/assets/static_images/GetItOnGooglePlay_Badge_Web_color_French.png"} alt={"Téléchargement Google Play"} width={200} height={150}/>
                  </a>
                <a href="#">
                  <Image src={"/assets/static_images/Download_on_the_App_Store_Badge_FR.svg"} alt={"Téléchargement App Store"} width={195} height={150}/>
                </a>
            </div>
          </section>

          <section className="text-2xl text-white p-[2rem]">
              <h2 className="dongle-regular-title mb-[3rem]">Les avis de notre communauté ! </h2>
              <h3 className="dongle-regular-title mb-[3rem]">Meilleurs jeux :fire:</h3>
              {gameList.map((game, index) => (
                  <GameDetails
                        key={index}
                        name={game.name}
                        image={game.image}
                        platforms={game.platforms}
                        tags={game.tags}
                        release_date={game.release_date}
                        rating={game.rating}
                  />
              ))}
          </section>

          <section className={"text-2xl text-white p-[2rem]"}>
              <h4 className="dongle-regular-title mb-[3rem]">Meilleurs listes :fire:</h4>
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
          </section>
      </>
  )
}

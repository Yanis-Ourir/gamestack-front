import Image from "next/image";
import Tag from "@/app/ui/molecule/tag";
import {IoGameControllerOutline} from "react-icons/io5";
import {CgScreen} from "react-icons/cg";
import GameDetails from "@/app/ui/molecule/game-details";
import React from "react";
export default function Home() {
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
              <GameDetails
                  title={"Granblue Fantasy Relink"}
                  image={"/assets/static_images/GFR.png"}
                  platforms={platforms}
                  genres={["JRPG", "Action", "Fantasy"]}
                  releaseDate={"Février 2024"}
                  grade={9.5}
              />
              <GameDetails
                  title={"Granblue Fantasy Relink"}
                  image={"/assets/static_images/GFR.png"}
                  platforms={platforms}
                  genres={["JRPG", "Action", "Fantasy"]}
                  releaseDate={"Février 2024"}
                    grade={9.5}
              />
              <GameDetails
                  title={"Granblue Fantasy Relink"}
                  image={"/assets/static_images/GFR.png"}
                  platforms={platforms}
                  genres={["JRPG", "Action", "Fantasy"]}
                  releaseDate={"Février 2024"}
                  grade={9.5}
              />
              <GameDetails
                  title={"Granblue Fantasy Relink"}
                  image={"/assets/static_images/GFR.png"}
                  platforms={platforms}
                  genres={["JRPG", "Action", "Fantasy"]}
                  releaseDate={"Février 2024"}
                  grade={9.5}
              />
          </section>

          <section className={"text-2xl text-white p-[2rem]"}>
              <h4 className="dongle-regular-title mb-[3rem]">Meilleurs listes :fire:</h4>
              <div className="flex justify-between items-center border-b border-gray-600 pb-4 mb-4">
                  <div className="flex items-center">
                    <Image src={"/assets/static_images/retro_gaming.jpg"} alt={"game list from community"} width={100} height={100}/>
                      <div className="px-4">
                          <p className="text-4xl">Classiques incontournables</p>
                          <div className={"flex items-center gap-2"}>
                              <Image className="avatar-image" src={"/assets/static_images/icon-default.jpg"}
                                     alt={"avatar from the game list"} width={40} height={40}/>
                              <p>
                                  John Doe - <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" fill="red"
                                                  stroke="red" strokeWidth="2" strokeLinecap="round"
                                                  strokeLinejoin="round" className="feather feather-heart">
                                              <path
                                                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                              </p>
                          </div>
                          <p className={"text-gray-500"}>Une liste qui selon moi regorges de jeux à faire
                              absolument...</p>
                          <p className={"text-gray-500"}>Mis à jour le 04/08/2024</p>
                      </div>
                  </div>
                  <div>
                      <p className={"text-3xl text-gray-500"}>Jeux</p>
                      <p className={"text-6xl text-red-600 text-center"}>15</p>
                  </div>

              </div>
          </section>
      </>
  )
}

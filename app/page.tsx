import Image from "next/image";
import GameDetails from "@/app/ui/molecule/game-details";
import React from "react";
import ListDetails from "@/app/ui/molecule/list-details";
import parseJWT from "./lib/parseJWT";
import TopTenGames from "./ui/organisms/top-ten-rated-games";
import MostLikedList from "./ui/organisms/most-liked-list";

export default function Home() {
  return (
      <>
          <section className="flex justify-center flex-col items-center my-12">
              <h1 className="text-4xl md:text-6xl font-medium text-white md:w-1/2 text-center">Create, share, and discover
                  <span className="bg-gradient-to-r from-[#C31432] to-purple-800 bg-clip-text text-transparent"> incredible experiences </span>
                  from your favorite 
                  <span className="bg-gradient-to-r from-[#C31432] to-purple-800 bg-clip-text text-transparent"> video games</span>
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
              <TopTenGames/>
          </section>

          <section className={"text-2xl text-white p-[2rem]"}>
              <h4 className="dongle-regular-title mb-[3rem]">Meilleurs listes :fire:</h4>
                <MostLikedList limit={5}/>
          </section>
      </>
  )
}

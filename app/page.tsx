import Image from "next/image";
import React from "react";
import TopTenGames from "./ui/organisms/top-ten-rated-games";
import MostLikedList from "./ui/organisms/most-liked-list";

export default function Home() {
  return (
      <>
      <section className="bg-gradient-to-br from-[#11131F] via-[#11131F] to-[#3f0d3d] text-white pb-24">
    
        <div className="flex flex-col items-center justify-center pt-20 px-6 text-center space-y-8">
          <h1 className="text-3xl md:text-6xl">
            Create, share, and discover
            <span className="bg-gradient-to-r from-[#C31432] to-purple-800 bg-clip-text text-transparent"> incredible experiences </span>
            from your favorite
            <span className="bg-gradient-to-r from-[#C31432] to-purple-800 bg-clip-text text-transparent"> video games</span>
          </h1>
          <p className="text-lg md:text-4xl mx-auto text-gray-400">
            Explore, contribute, and immerse yourself in game-inspired experiences curated by a passionate community.
          </p>
        </div>


        <div className="flex flex-col md:flex-row justify-center items-center mt-16 space-y-12 md:space-y-0 md:space-x-8 px-4">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-md max-w-sm">
            <Image src="/assets/static_images/landing-page-mobile.png" alt="List of game categories" width={300} height={600} className="rounded-lg mb-4" />
            <h3 className="text-4xl text-purple-400">Discover New Categories</h3>
            <p className="mt-2 text-2xl">
              Browse unique categories to find games and experiences you never knew you needed. Filter by genre, style, or theme!
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-md max-w-sm">
            <Image src="/assets/static_images/landing-page-mobile-2.png" alt="Game details and community reviews" width={300} height={600} className="rounded-lg mb-4" />
            <h3 className="text-4xl text-purple-400">Detailed Game Insights</h3>
            <p className="mt-2 text-2xl">
              Dive into detailed information, ratings, and reviews from other players. Track your favorite games and share your opinions.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-md max-w-sm">
            <Image src="/assets/static_images/landing-page-mobile-2.png" alt="Create and share experiences" width={300} height={600} className="rounded-lg mb-4" />
            <h3 className="text-4xl text-purple-400">Create Your Own Lists</h3>
            <p className="mt-2 text-2xl">
              Curate and share lists of your top games. Help others discover hidden gems or classic favorites.
            </p>
          </div>
        </div>

     
        <div className="flex flex-col items-center mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get the App</h2>
          <p className="text-lg mb-8 max-w-md text-center">
            Available on Google Play and the App Store. Start your journey today!
          </p>
          <div className="flex space-x-4">
            <a href="#" className="transform hover:scale-105 transition duration-300 ease-in-out">
              <Image src="/assets/static_images/GetItOnGooglePlay_Badge_Web_color_French.png" alt="Download on Google Play" width={180} height={55} />
            </a>
            <a href="#" className="transform hover:scale-105 transition duration-300 ease-in-out">
              <Image src="/assets/static_images/Download_on_the_App_Store_Badge_FR.svg" alt="Download on the App Store" width={170} height={55} />
            </a>
          </div>
        </div>
      </section>


          <section className="text-2xl text-white p-[2rem]">
              <h2 className="dongle-regular-title mb-[3rem]">Community Evaluation </h2>
              <h3 className="dongle-regular-title mb-[3rem]">Best Games</h3>
              <TopTenGames/>
          </section>

          <section className={"text-2xl text-white p-[2rem]"}>
              <h4 className="dongle-regular-title mb-[3rem]">Best lists</h4>
                <MostLikedList limit={5}/>
          </section>
      </>
  )
}

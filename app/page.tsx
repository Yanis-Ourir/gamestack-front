import Image from "next/image";

export default function Home() {
  return (
      <>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-6xl font-medium text-white w-1/2 text-center">Créez, partagez et découvrez les
            <span
                className="bg-gradient-to-r from-red-400 to-purple-800 bg-clip-text text-transparent"> expériences</span> incroyables
            de vos
            <span className="bg-gradient-to-r from-red-400 to-purple-800 bg-clip-text text-transparent"> jeux vidéo</span> préférés</h1>
            <Image src="/assets/landing_iphone_page.png" alt="iphone gamestack video game list" width={300} height={300}/>
            <button className={"text-2xl bg-gradient-to-r from-[#C31432] to-purple-800 text-white py-2 px-4 rounded-full"}>Télécharger notre application</button>
        </div>
      </>
  )
}

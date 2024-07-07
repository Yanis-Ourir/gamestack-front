import Image from "next/image";
import { BsAndroid2 } from "react-icons/bs";
export default function Home() {
  return (
      <>
        <div className="flex justify-center flex-col items-center my-12">
          <h1 className="text-6xl font-medium text-white w-1/2 text-center">Créez, partagez et découvrez les
            <span
                className="bg-gradient-to-r from-[#C31432] to-purple-800 bg-clip-text text-transparent"> expériences</span> incroyables
            de vos
            <span className="bg-gradient-to-r from-[#C31432] to-purple-800 bg-clip-text text-transparent"> jeux vidéo</span> préférés</h1>
            <div className="relative w-full flex justify-center items-center mt-12">

                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-800 to-purple-800 blur-2xl rounded-lg w-[70%] h-[105%]"></div>
                <Image src="/assets/landing-page.jpg" alt="iPhone GameStack video game list" width={1200} height={300} className="relative mt-12"/>
            </div>

            <button className={"text-2xl bg-gradient-to-r from-[#C31432] to-purple-800 text-white py-2 px-4 mt-24 rounded-full flex gap-2"}>
                Télécharger notre application <BsAndroid2/>
            </button>
        </div>
      </>
  )
}

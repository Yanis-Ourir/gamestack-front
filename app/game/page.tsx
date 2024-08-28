import Image from "next/image";
import { CgScreen } from "react-icons/cg";
import { IoGameControllerOutline } from "react-icons/io5";
import Tag from "../ui/molecule/tag";
import { findGameByName } from "../lib/gameCrud";

export default async function Game({params} : {params: string}) {
    const gameFind = await findGameByName(params);
    console.log(gameFind);
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

    const game = {
        name: "Granblue Fantasy Relink",
        image: "/assets/static_images/GFR.png",
        description: "Une grande aventure céleste vous attend ! Formez un groupe de quatre navigateurs et frayez-vous un chemin à coups d'épées, de balles ou de sorts dans cet action RPG. Participez à des quêtes en solo ou en coopération avec jusqu'à trois autres joueurs !",
        platforms: platforms,
        tags: ["JRPG", "Action", "Fantasy"],
        release_date: "Février 2024",
        rating: 9.5
    };

    return (
        <>
            <section id="game-details" className="flex p-4 mt-[2rem]">
                <Image src={game.image} alt={game.name} width={150} height={100}/>
                <div className="text-white text-2xl px-4">
                <h1 className="dongle-regular-title">{game.name}</h1>
                    <p className="text-gray-500">Date de sortie {game.release_date}</p>
                        <div className="flex gap-3 mb-4">
                        {game.platforms.map((platform, index) => (
                            <Tag key={index} name={platform.tagName} icon={platform.icon}/>
                        ))}
                        </div>
                    <p>
                        {game.tags.join(", ")}
                    </p>
                    <p className="text-gray-500">{game.description}</p>
                </div>
            </section>


            <section id="game-stats">
                <div className="flex p-4 mt-[2rem] justify-center">
                    <div className="text-white text-2xl">
                        <h1 className="dongle-regular-title">Statistiques</h1>
                        <p className="text-gray-500">Note de la communauté: <span className="text-red-600 text-6xl">{game.rating}</span></p>
                    </div>
                </div>
                <div className="flex justify-center">
                        <Image src={"/assets/static_images/graphic_placeholder.png"} alt={"Graphique de statistiques"} width={1000} height={500} />
                    </div>
            </section>
        </>
    )
}
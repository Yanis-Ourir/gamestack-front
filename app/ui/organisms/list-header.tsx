import Image from "next/image";
import LikeDislike from "../form/like-dislike";
import { ListData } from "@/app/lib/listCrud";

export default function ListHeader({listDetails}: {listDetails: ListData}) {
    return (
        <>
            <Image
                src={listDetails.image ? `http://localhost:8000/storage/${listDetails.image}` : "/assets/static_images/retro_gaming.jpg"}
                alt={"game list video picture"}
                width={100}
                height={100}
            />
            <div className={"px-4"}>
                <h1 className={"dongle-regular-title"}>{listDetails.name}</h1>
                <div className={"text-white text-2xl text-center flex items-center"}>
                    <Image
                        src={listDetails.user.avatar || "/assets/static_images/icon-default.jpg"} // Fallback for avatar if null
                        alt={"avatar of list owner"}
                        className={"avatar-image"}
                        width={40}
                        height={40}
                    />
                    <p>{listDetails.user.username} - Mis à jour le {new Date(listDetails.updated_at).toLocaleDateString()}</p>
                </div>
                <p className={"text-2xl text-gray-500"}>
                    {listDetails.description}
                </p>
        
                    <LikeDislike initialLikes={listDetails.likes} initialDislikes={listDetails.dislikes} likeableId={listDetails.id} likeableType={"GameList"}/>
                
            </div>
        </>
    )
}
import Image from "next/image";
import React from "react";

type ListDetailsProps = {
    title: string;
    description: string;
    image: string;
    likes: number;
    updatedAt: string;
    avatar: string;
    username: string;
    gamesNumber: number;
}
export default function ListDetails({title, description, image, likes, updatedAt, avatar, username, gamesNumber}: ListDetailsProps) {
    return (
        <div className="flex justify-between items-center border-b border-gray-600 pb-4 mb-4">
            <div className="flex items-center">
                <Image src={image} alt={"game list from community"} width={100}
                       height={100}/>
                <div className="px-4">
                    <p className="text-4xl">{title}</p>
                    <div className={"flex items-center gap-2"}>
                        <Image className="avatar-image" src={avatar}
                               alt={"avatar from the game list"} width={40} height={40}/>
                        <div className={"flex w-1/2 items-center"}>
                            <p className="w-full">
                                {username} - <span className="text-red-600 text-3xl">{likes}</span>
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 30" fill="red"
                                 stroke="red" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-heart">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </div>
                    </div>
                    <p className={"text-gray-500"}>{description}</p>
                    <p className={"text-gray-500"}>{updatedAt}</p>
                </div>
            </div>
            <div>
                <p className={"text-3xl text-gray-500"}>Jeux</p>
                <p className={"text-6xl text-red-600 text-center"}>{gamesNumber}</p>
            </div>

        </div>
    )
}

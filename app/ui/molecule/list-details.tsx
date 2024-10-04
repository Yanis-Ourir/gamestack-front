import Image from "next/image";
import Link from "next/link";
import React from "react";

export type ListDetailsProps = {
    id: string;
    name: string;
    description: string;
    image: string;
    likes: number;
    updated_at: string;
    avatar: string;
    user: string;
    gamesNumber: number;
}

export default function ListDetails({id, name, description, image, likes, updated_at, avatar, user, gamesNumber}: ListDetailsProps) {
    return (
        <Link href={'/list/' + id} className="flex justify-between items-center border-b border-gray-600 pb-4 mb-4">
            <div className="flex items-center">
                <Image src={image} alt={"game list from community"} width={100}
                       height={100}/>
                <div className="px-4">
                    <p className="text-4xl">{name}</p>
                    <div className={"flex items-center gap-2"}>
                        <Image className="avatar-image" src={avatar}
                               alt={"avatar from the game list"} width={40} height={40}/>
                        <div className="flex items-center gap-2"> {/* Add flexbox and gap for spacing */}
                            <p className="text-2xl">{user} - {likes}</p> {/* Adjust font size for better balance */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"  
                                fill="red"
                                stroke="red"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-6 h-6"  
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                    </div>
                    <p className={"text-gray-500"}>{description}</p>
                    <p className={"text-gray-500"}>{updated_at}</p>
                </div>
            </div>
            <div>
                <p className={"text-3xl text-gray-500"}>Jeux</p>
                <p className={"text-6xl text-red-600 text-center"}>{gamesNumber}</p>
            </div>

        </Link>
    )
}

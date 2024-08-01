import Image from "next/image";
import Tag from "@/app/ui/molecule/tag";
import React from "react";

type GameDetailsProps = {
    title: string;
    image: string;
    platforms: PlatformsProps[];
    genres: string[];
    releaseDate: string;
    grade?: number;
}

type PlatformsProps = {
    tagName: string;
    icon: React.ReactNode;
}

export default function GameDetails({title, image, platforms, genres, releaseDate, grade}: GameDetailsProps) {
    return (
        <div className="flex mb-4 border-b border-gray-600 pb-4 items-center justify-between">
            <div className="flex">
                <Image src={image} alt={"GBF"} width={"100"} height={"100"}/>
                <div className="px-4">
                    <p className="text-4xl">{title}</p>
                    <div className={"flex gap-3"}>
                        <p>Plateformes : </p>
                        {platforms.map((platform: PlatformsProps, index) => (
                            <Tag key={index} tagName={platform.tagName} icon={platform.icon}/>
                        ))}
                    </div>
                    <div className={"text-gray-500"}>
                            <p>
                                {genres.join(", ")}
                            </p>
                        <p>{releaseDate}</p>
                    </div>
                </div>
            </div>
                <div>
                    <p className={"text-6xl text-red-600"}>
                        {grade}
                    </p>
                </div>
        </div>
    )
}
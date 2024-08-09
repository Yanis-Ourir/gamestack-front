import Image from "next/image";
import Tag from "@/app/ui/molecule/tag";
import React from "react";
import Link from "next/link";

export type GameDetailsProps = {
    id?: string;
    name: string;
    image: string;
    platforms: PlatformsProps[];
    tags: string[];
    release_date: string;
    rating?: number;
}

export type PlatformsProps = {
    tagName: string;
    icon: React.ReactNode;
}

export default function GameDetails({id, name, image, platforms, tags, release_date, rating}: GameDetailsProps) {
    return (
        <Link href={"/game/" + id} className="flex mb-4 border-b border-gray-600 pb-4 items-center justify-between">
            <div className="flex">
                <Image src={image} alt={"GBF"} width={"100"} height={"100"}/>
                <div className="px-4">
                    <p className="text-4xl">{name}</p>
                    <div className={"flex gap-3"}>
                        <p>Plateformes : </p>
                        {platforms.map((platform: PlatformsProps, index) => (
                            <Tag key={index} tagName={platform.tagName} icon={platform.icon}/>
                        ))}
                    </div>
                    <div className={"text-gray-500"}>
                            <p>
                                {tags.join(", ")}
                            </p>
                        <p>{release_date}</p>
                    </div>
                </div>
            </div>
                <div>
                    <p className={"text-6xl text-red-600"}>
                        {rating}
                    </p>
                </div>
        </Link>
    )
}
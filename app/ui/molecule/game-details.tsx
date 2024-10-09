import Image from "next/image";
import Tag from "@/app/ui/molecule/tag";
import React from "react";
import Link from "next/link";

export type GameDetailsProps = {
    id: string;
    name: string;
    image?: string;
    description?: string;
    platforms: PlatformsProps[];
    tags: string[];
    slug: string;
    release_date: string;
    rating?: number;
    evaluations?: EvaluationProps[];
}

export type EvaluationProps = {
    id: number;
    rating: number;
    description: string;
    game_time: string;
    status: StatusProps;
    platforms: PlatformsProps[];
    user: string;
}

export type StatusProps = {
    name: string;
    icon: string;
    color: string;
}


export type PlatformsProps = {
    name: string;
    icon: string;
}

export default function GameDetails({id, slug, name, image, platforms, tags, release_date, rating}: GameDetailsProps) {
    return (
        <Link href={"/game/" + slug} className="flex mb-4 border-b border-gray-600 pb-4 items-center justify-between">
            <div className="flex">
                <Image src={image ? image : "/assets/static_images/No-Image-Placeholder.png"} alt={"GBF"} width={"100"} height={"100"}/>
                <div className="px-4 flex flex-col justify-between">
                    <p className="text-3xl md:text-4xl">{name}</p>
                    <div className={"flex gap-3 items-center"}>
                        <p className="hidden md:block">Plateformes : </p>
                        {platforms.map((platform: PlatformsProps, index) => (
                            <Tag key={index} name={platform.name} icon={platform.icon}/>
                        ))}
                    </div>
                    <div className={"text-gray-500 flex md:block items-end gap-6"}>
                        <div>
                            <p>
                                {tags.join(", ")}
                            </p>
                            <p>{release_date}</p>
                        </div>
                        <p className={"text-4xl text-red-600 md:hidden"}>
                            {rating}
                        </p>
                    </div>
                </div>
            </div>
                <div className="hidden md:block">
                    <p className={"text-6xl text-red-600"}>
                        {rating}
                    </p>
                </div>
        </Link>
    )
}
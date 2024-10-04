import Image from "next/image";
import Tag from "@/app/ui/molecule/tag";
import React from "react";
import Link from "next/link";
import { IoEllipsisHorizontal } from "react-icons/io5";
import DropdownMenu from "../atoms/dropdown-menu";
import { removeGameFromList } from "@/app/lib/listCrud";

export type GameReviewProps = {
    idList: string;
    id: string;
    name: string;
    image?: string;
    description?: string;
    platforms: PlatformsProps[];
    tags: string[];
    slug: string;
    release_date: string;
}

export type PlatformsProps = {
    name: string;
    icon: string;
}

function handleEdit() {

}

function handleDelete(idGame: string, idList: string) {
    removeGameFromList(idGame, idList);
}



export default function GameReview({ idList, id, slug, name, image, platforms, tags, release_date }: GameReviewProps) {
    return (
        <div className="flex mb-4 border-b border-gray-600 pb-4 items-center justify-between">
            <Link href={"/game/" + slug} className="flex">
                <Image src={image ? image : ""} alt={"GBF"} width={"100"} height={"100"} />
                <div className="px-4">
                    <p className="text-4xl">{name}</p>
                    <div className={"flex gap-3"}>
                        <p>Plateformes : </p>
                        {platforms.map((platform: PlatformsProps, index) => (
                            <Tag key={index} name={platform.name} icon={platform.icon} />
                        ))}
                    </div>
                    <div className={"text-gray-500"}>
                        <p>
                            {tags.join(", ")}
                        </p>
                        <p>{release_date}</p>
                    </div>
                </div>
            </Link>
            <DropdownMenu editFunction={handleEdit} deleteFunction={() => handleDelete(idList, id)}/>
        </div>
    )
}
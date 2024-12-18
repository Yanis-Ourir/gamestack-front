import Image from "next/image";
import Tag from "@/app/ui/molecule/tag";
import React from "react";
import Link from "next/link";
import { IoEllipsisHorizontal } from "react-icons/io5";
import DropdownMenu from "../atoms/dropdown-menu";
import { removeGameFromList } from "@/app/lib/listCrud";
import DynamicIcon from "../atoms/dynamic-icon";

export type GameReviewProps = {
    idList: string;
    id: string;
    name: string;
    image?: string;
    description?: string;
    platforms: PlatformsProps[];
    tags: string[];
    slug: string;
    status?: StatusProps;
    release_date: string;
    review?: {
        description: string;
        status: StatusProps;
    }
    handleEdit: () => void;
    handleDelete: (idGame: string, idList: string) => void;
}

export type PlatformsProps = {
    name: string;
    icon: string;
}

export type StatusProps = {
    id: number;
    name: string;
    icon: string;
    color: string;
}



export default function GameReview({ idList, id, slug, name, description, status, image, platforms, tags, release_date, handleEdit, handleDelete }: GameReviewProps) {
    return (
        <div className="flex mb-4 border-b border-gray-600 pb-4 items-center justify-between">
            <Link href={"/game/" + slug} className="flex">
                <Image src={image ? image : "/assets/static_images/No-Image-Placeholder.png"} alt={"GBF"} width={"100"} height={"100"} />
                <div className="px-4">
                    <div className="md:flex items-center gap-4">
                        <p className="text-3xl md:text-4xl">{name}</p>
                        {status && (
                            <div className={"flex items-center gap-2 " + status.color}>
                                <DynamicIcon icon={status.icon}/>
                                <p>{status.name}</p>
                            </div>
                        )}
                        </div>
                    <div className={"flex gap-3"}>
                        <p className="hidden md:block">Platforms : </p>
                        {platforms.map((platform: PlatformsProps, index) => (
                            <Tag key={index} name={platform.name} icon={platform.icon} />
                        ))}
                    </div>
                    <div className={"text-gray-500"}>
                        <p>
                            {tags?.join(", ")}
                        </p>
                        <p>{release_date}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
            <div className="hidden md:block">
                <DropdownMenu editFunction={handleEdit} deleteFunction={handleDelete}/>
            </div>
        </div>
    )
}
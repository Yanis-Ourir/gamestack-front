'use client';
import ListDetails from "@/app/ui/molecule/list-details";
import React, { use, useEffect, useState } from "react";
import { findGameListOfUser } from "../lib/listCrud";


type ListData = {
    id: string;
    name: string;
    description: string;
    is_private: boolean;
    user_id: number;
    image: string;
    updated_at: string;
    user: string;
    likes: number;
    dislikes: number;
}

export default function ProfilList() {
    const [lists, setLists] = useState<ListData[]>([]);

    useEffect(() => {
        async function fetchData() {
            const listsData = await findGameListOfUser();
            setLists(listsData);
            console.log(listsData);
        }
        fetchData();
    }, []);


    

    
    return (
        <div className={"text-2xl text-white p-[2rem]"}>
            {lists.map((list, index) => (
                <ListDetails
                    key={list.id}
                    id={list.id}
                    name={list.name}
                    description={list.description}
                    image={list.image ? "http://localhost:8000/storage/" + list.image : "/assets/static_images/retro_gaming.jpg"}
                    likes={list.likes}
                    updatedAt={list.updated_at}
                    avatar={"/assets/static_images/icon-default.jpg"}
                    username={list.user}
                    gamesNumber={0}
                />
            ))}
        </div>
    )
}

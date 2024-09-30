'use client';
import ListDetails from "@/app/ui/molecule/list-details";
import React, { useEffect, useState } from "react";
import { deleteListById, findGameListOfUser, ListData } from "../lib/listCrud";
import Loader from "../ui/molecule/loader";
import SuccessMessage from "../ui/atoms/success-message";
import ErrorMessage from "../ui/atoms/error-message";




export default function ProfilList() {
    const [lists, setLists] = useState<ListData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            const listsData = await findGameListOfUser();
            setLists(listsData);
            console.log(listsData);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    async function deleteList(id: string) {
        try {
            await deleteListById(id);
            setLists(lists.filter(list => list.id !== id));
            setSuccessMessage('Liste supprimée avec succès');
        } catch (error) {
            console.error('Error deleting list:', error);
            setErrorMessage('Erreur lors de la suppression de la liste');
        }
    }

    
    return (
        <div className={"text-2xl text-white p-[2rem]"}>
            {successMessage && (
                <div className="flex justify-center">
                <SuccessMessage message={successMessage} />
                </div>
            )}

            {errorMessage && (
                <div className="flex justify-center">
                    <ErrorMessage message={errorMessage} />
                </div>
            )}

            {lists.map((list, index) => (
                <div key={index}>
                <ListDetails
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
                 <button className="bg-red-500 text-white px-4 py-2 rounded-full" onClick={() => deleteList(list.id)}>Supprimer</button>
                </div>
            ))}
        </div>
    )
}

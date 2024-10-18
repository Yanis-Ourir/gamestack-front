'use client';
import ListDetails, { ListDetailsProps } from "@/app/ui/molecule/list-details";
import React, { useEffect, useState } from "react";
import { deleteListById, findGameListOfUser, ListData } from "../lib/listCrud";
import Loader from "../ui/molecule/loader";
import SuccessMessage from "../ui/atoms/success-message";
import ErrorMessage from "../ui/atoms/error-message";
import Link from "next/link";




export default function ProfilList() {
    const [lists, setLists] = useState<ListDetailsProps[]>([]);
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
            <section className="flex text-4xl justify-around mt-16 text-white" id={"profil-nav"}>
                <Link href={"/profil"} className={"hover:text-hover-red active:text-hover-red active:underline [&.active]:text-hover-red"}>Listes</Link>
                <Link href={"/profil/reviews"} className={"hover:text-hover-red active:text-hover-red active:underline [&.active]:text-hover-red"}>Évaluations</Link>
                <Link href={"#"} className={"hover:text-hover-red"}>Favoris</Link>
                <Link href={"#"} className={"hover:text-hover-red active:text-hover-red"}>Stats</Link>
            </section>

            <Link href="/list/create-list" className="text-red-400 hover:underline">Create List</Link>

            {lists.length > 0 ? ( lists.map((list, index) => (
                <div key={index}>
                    <ListDetails
                        id={list.id}
                        name={list.name}
                        description={list.description}
                        image={list.image ? "http://localhost:8000/storage/" + list.image : "/assets/static_images/retro_gaming.jpg"}
                        likes={list.likes}
                        updated_at={list.updated_at}
                        avatar={"/assets/static_images/icon-default.jpg"}
                        user={list.user}
                        games={list.games}
                        />
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full" onClick={() => deleteList(list.id)}>Delete</button>
                </div>
            ))
            ) : (
                    <div>
                        <p className="text-4xl">Vous n'avez pas encore de liste</p>
                    </div>
            )}
        </div>
    )
}

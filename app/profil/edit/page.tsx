'use client';
import findUser, { editUser } from "@/app/lib/userCrud";
import Button from "@/app/ui/atoms/button";
import ErrorMessage from "@/app/ui/atoms/error-message";
import Input from "@/app/ui/atoms/input";
import SuccessMessage from "@/app/ui/atoms/success-message";
import Loader from "@/app/ui/molecule/loader";
import { User } from "@/app/ui/organisms/profil-header";
import { useEffect, useState } from "react";

export default function EditProfil() {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<User>();

    async function fetchData() {
        const data = await findUser();
        setUser(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();
        const { profilPseudo, profilDescription, profilImage } = e.target.elements;
        const profil = {
            profilPseudo: profilPseudo.value,
            profilDescription: profilDescription.value,
            profilImage: profilImage.files[0],
        }

        try {
            const result = await editUser(profil);
            if (result === 'Profil updated successfully') {
                setSuccessMessage(result);
            } else {
                setErrorMessage(result); 
            }
        } catch (error) {
            setErrorMessage('Une erreur inattendue est survenue.');
            console.error(error);
        }
    }

    if (loading) {
        return <Loader />;
    }

    return (
        
        <div className="flex flex-col items-center justify-center mt-24">
            <h1 className="dongle-regular-title text-white">Update your GameStack profil</h1>
        
            <div className="flex justify-center">
                {errorMessage && (
                    <ErrorMessage message={errorMessage} />
                )}

                {successMessage && (
                    <SuccessMessage message={successMessage} />
                )}
            </div>

            <form className="space-y-6 bg-gray-900 px-12  py-8 lg:w-1/3 md:w-full rounded-lg text-2xl mb-[8rem] mt-[2rem]" method="POST" onSubmit={handleSubmit} encType='multipart/form-data'>
                <input type="hidden" name="_method" value="PUT"></input>
                <Input label={"Pseudo"} type={"text"} id={"profil-name"} name={"profilPseudo"} required={true} className={"input-login"} defaultValue={user?.pseudo ? user.pseudo : ""}/>
                <Input label={"Description"} type={"text"} id={"profil-description"} name={"profilDescription"} required={true} className={"input-login"} defaultValue={user?.description ? user.description : ""}/>
                <Input label={"Profil picture"} type={"file"} id={"profil-image"} name={"profilImage"} required={false} className={"input-login"} />
                <Button classes={"bg-red-input w-full rounded-full p-1.5 text-white hover:bg-red-input-hover"} label={"Update"} />
            </form>
        </div>
    )
}
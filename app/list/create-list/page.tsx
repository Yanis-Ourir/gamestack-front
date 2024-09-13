'use client';
import { createListRequest } from '@/app/lib/listCrud';
import { useState } from 'react';
import Button from '@/app/ui/atoms/button'
import Input from '@/app/ui/atoms/input'
import React from 'react'
import SuccessMessage from '@/app/ui/atoms/success-message';
import ErrorMessage from '@/app/ui/atoms/error-message';

export default function CreateList() {
    const [listStatus, setListStatus] = useState<string>(''); 
    const [errorMessage, setErrorMessage] = useState<string>(''); 

    async function handleSubmit(e: any) {
        e.preventDefault();
        const { listName, listDescription, listImage, listVisibility } = e.target.elements;

        try {
            const result = await createListRequest(listName.value, listDescription.value, listImage.value, listVisibility.value);
            if (result === 'Liste créée avec succès !') {
                setListStatus(result); 
            } else {
                setErrorMessage(result); // Affiche l'erreur retournée par la fonction createListRequest
            }
        } catch (error) {
            setErrorMessage('Une erreur inattendue est survenue.');
            console.error(error);
        }
    }
  return (
      <div className="flex flex-col items-center justify-center">
          <h1 className={"dongle-regular-title text-white mt-12"}>Créer une nouvelle liste de jeux vidéos !</h1>
            <p className={"text-2xl text-white"}>Choisissez le type de liste que vous souhaitez faire ! Partager vos expériences jeux vidéos avec la communauté !</p>

          {listStatus && (
              <SuccessMessage message={listStatus} />
          )}

          {errorMessage && (
              <ErrorMessage message={errorMessage} />
          )}
          
            <form className="space-y-6 bg-gray-900 px-12  py-8 lg:w-1/3 md:w-full rounded-lg text-2xl mb-[8rem] mt-[2rem]" method="POST" onSubmit={handleSubmit}>
                <Input label={"Nom de la liste"} type={"text"} id={"list-name"} name={"listName"} required={true} className={"input-login"}/>
                <Input label={"Description de la liste"} type={"text"} id={"list-description"} name={"listDescription"} required={true} className={"input-login"}/>
                <Input label={"Image de la liste"} type={"file"} id={"list-image"} name={"listImage"} required={false} className={"input-login"}/>
                <label htmlFor="list-visibility" className="block text-md font-medium leading-6 text-white">Visibilité de la liste</label>
                <select name="listVisibility" id="list-visibility" className="input-login" required={true}>
                    <option value="0">Public</option>
                    <option value="1">Privée</option>
                </select>
              <Button classes={"bg-red-input w-full rounded-full p-1.5 text-white hover:bg-red-input-hover"} label={"Créer votre liste"} />
            </form>
    </div>
  )
}

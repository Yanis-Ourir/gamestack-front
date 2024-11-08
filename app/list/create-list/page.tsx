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
        const List = {
            listName: listName.value,
            listDescription: listDescription.value,
            listImage: listImage.files[0],
            listVisibility: listVisibility.value,
        }
        try {
            const result = await createListRequest(List);
            if (result === 'List created successfully') {
                setListStatus(result); 
            } else {
                setErrorMessage(result); 
            }
        } catch (error) {
            setErrorMessage('Error creating list');
            console.error(error);
        }
    }
  return (
      <div className="flex flex-col items-center justify-center">
          <h1 className={"dongle-regular-title text-white mt-12"}>Create a new game list !</h1>
            <p className={"text-2xl text-white"}>Choose your type of game list that you want to create</p>
        
        <div className="h-12">

          {listStatus && (
              <SuccessMessage message={listStatus} />
            )}

          {errorMessage && (
              <ErrorMessage message={errorMessage} />
            )}
        </div>
          
            <form className="space-y-6 bg-gray-900 px-12  py-8 lg:w-1/3 md:w-full rounded-lg text-2xl mb-[8rem] mt-[2rem]" method="POST" onSubmit={handleSubmit} encType='multipart/form-data'>
                <Input label={"List name"} type={"text"} id={"list-name"} name={"listName"} required={true} className={"input-login"}/>
                <Input label={"List description"} type={"text"} id={"list-description"} name={"listDescription"} required={true} className={"input-login"}/>
                <Input label={"List image"} type={"file"} id={"list-image"} name={"listImage"} required={false} className={"input-login"}/>
                <label htmlFor="list-visibility" className="block text-md font-medium leading-6 text-white">List visibility</label>
                <select name="listVisibility" id="list-visibility" className="input-login" required={true}>
                    <option value="0">Public</option>
                    <option value="1">Private</option>
                </select>
              <Button classes={"bg-red-input w-full rounded-full p-1.5 text-white hover:bg-red-input-hover"} label={"Create your list"} />
            </form>
    </div>
  )
}

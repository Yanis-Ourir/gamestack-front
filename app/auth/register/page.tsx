'use client';
import Image from "next/image";
import Input from "@/app/ui/atoms/input";
import Link from "next/link";
import Button from "@/app/ui/atoms/button";
import registerRequest from "@/app/lib/registerRequest";
import { useState } from "react";
import ErrorMessage from "@/app/ui/atoms/error-message";

export default function Register() {
    const [errorMessage, setErrorMessage] = useState<string>('');

    async function handleSubmit(e: any) {
        e.preventDefault();
        const { pseudo, email, password } = e.target.elements;
        console.log(email.value, password.value);
        try {
            const register = await registerRequest(pseudo.value, email.value, password.value);
            if(register) setErrorMessage(register);
        } catch(error) {
            setErrorMessage('Une erreur inattendue est survenue.');
            console.error(error);
        }
    }

    
    return <div className="flex flex-col items-center justify-center">
        <Image src="/assets/place_holder_logo.png" alt={"Logo gamestack"} width={200} height={200} />
        <h1 className={"dongle-regular-title text-white"}>Register</h1>

        <div className="h-24">
        {errorMessage &&
            <ErrorMessage message={errorMessage} />
        }
        </div>

        <form className="space-y-6 bg-gray-900 px-12  py-8 md:w-1/3 rounded-lg text-2xl mb-[4rem]" method="POST"
            onSubmit={handleSubmit}>
            <Input label={"Pseudo :"} type={"text"} id={"#inputPseudo"} name={"pseudo"} required={true}
                className={"input-login"} />
            <Input label={"Email :"} type={"email"} id={"#inputEmail"} name={"email"} required={true}
                className={"input-login"} />
            <Input label={"Password :"} type={"password"} id={"#inputPassword"} name={"password"} required={true}
                className={"input-login"} />

            <Button classes={"bg-red-input w-full rounded-full p-1.5 text-white hover:bg-red-input-hover"} label={"Register"} />
            
            <p className="text-white text-center pt-2">Already have an account ? <Link href="/auth/login" className="text-red-400 hover:underline">Log in</Link>
            </p>
        </form>
    </div>
}

'use client';

import React, {useEffect, useState} from "react";
import Input from "@/app/ui/form/input";
import Image from "next/image";

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export default function Login() {

    // @ts-ignore
    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = e.target.elements;
        console.log(email.value, password.value);
        loginRequest(email.value, password.value);
    }

    // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     const { email, password } = (e.target as any).elements;
    //     console.log(email.value, password.value);
    //     loginRequest(email.value, password.value);
    // }
    function loginRequest(emailValue: string, passwordValue: string) {
        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue
            }),
        }).then(async (response) => {
            const data: LoginResponse = await response.json();
            localStorage.setItem('token', data.access_token);
        });
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <Image src="/assets/place_holder_logo.png" alt={"Logo gamestack"} width={200} height={200}/>
            <form className="space-y-6 bg-gray-900 p-12 w-1/4 rounded-lg" method="POST" onSubmit={handleSubmit}>
                <Input label={"Email :"} type={"email"} id={"#inputEmail"} name={"email"} required={true} className={"input-login"}/>
                <Input label={"Mot de passe :"} type={"password"} id={"#inputPassword"} name={"password"} required={true} className={"input-login"}/>
            </form>
        </div>
    )
}

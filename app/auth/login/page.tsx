'use client';
import Input from "@/app/ui/atoms/input";
import Image from "next/image";
import Button from "@/app/ui/atoms/button";
import Link from "next/link";
import loginRequest from "@/app/lib/loginRequest";
import SuccessMessage from "@/app/ui/atoms/success-message";
import { useState } from "react";
import ErrorMessage from "@/app/ui/atoms/error-message";

export default function Login() {
    const [error, setError] = useState<string>('');
    const success = localStorage.getItem('success');

    function handleSubmit(e: any) {
        e.preventDefault();
        const { email, password } = e.target.elements;
        console.log(email.value, password.value);
        try {
            loginRequest(email.value, password.value);
        } catch (error) {
            setError('Login failed. Please check your email and password.');
        }
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <Image src="/assets/place_holder_logo.png" alt={"Logo gamestack"} width={200} height={200} />
            {success &&
                <SuccessMessage message={success} />
            }
            {error &&
                <ErrorMessage message={error} />
            }
            <form className="space-y-6 bg-gray-900 px-12  py-8 lg:w-1/3 md:w-full rounded-lg text-2xl mb-[8rem]" method="POST" onSubmit={handleSubmit}>
                <Input label={"Email :"} type={"email"} id={"#inputEmail"} name={"email"} required={true} className={"input-login"} />
                <Input label={"Password :"} type={"password"} id={"#inputPassword"} name={"password"} required={true} className={"input-login"} />
                <div className="md:flex items-center justify-between">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Input label={null} type={"checkbox"} id={"#inputRememberMe"} name={"rememberMe"} required={false} className={""} />
                        <label htmlFor={"#inputRememberMe"} className="text-white pt-1">Remember me</label>
                    </div>
                    <Link href="#" className="text-gray-500 pt-1 hover:text-red-400">Forgot password ?</Link>
                </div>
                <Button classes={"bg-red-input w-full rounded-full p-1.5 text-white hover:bg-red-input-hover"} label={"Connexion"} />
                <p className="text-white text-center pt-2">No account yet ? <Link href="/auth/register" className="text-red-400 hover:underline">Register</Link></p>
            </form>
        </div>
    )
}

'use client';
import Input from "@/app/ui/form/input";
import Image from "next/image";
import Button from "@/app/ui/form/button";
import Link from "next/link";

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export default function Login() {

    const success = localStorage.getItem('success');

    // @ts-ignore
    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = e.target.elements;
        console.log(email.value, password.value);
        loginRequest(email.value, password.value);
    }

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
            localStorage.removeItem('success');
            window.location.href = "/";
        });
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <Image src="/assets/place_holder_logo.png" alt={"Logo gamestack"} width={200} height={200}/>
            {success && 
                <div className={"text-green-400 text-2xl bg-green-800 lg:w-1/3 md:w-full p-2 rounded-lg mb-4"}>
                <p className="text-green-500 text-center">{success}</p>
            </div>
            }
            <form className="space-y-6 bg-gray-900 px-12  py-8 lg:w-1/3 md:w-full rounded-lg text-2xl mb-[2rem]" method="POST" onSubmit={handleSubmit}>
                <Input label={"Email :"} type={"email"} id={"#inputEmail"} name={"email"} required={true} className={"input-login"}/>
                <Input label={"Mot de passe :"} type={"password"} id={"#inputPassword"} name={"password"} required={true} className={"input-login"}/>
                <div className="md:flex items-center justify-between">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Input label={null} type={"checkbox"} id={"#inputRememberMe"} name={"rememberMe"} required={false} className={""}/>
                        <label htmlFor={"#inputRememberMe"} className="text-white pt-1">Se souvenir de moi</label>
                    </div>
                    <Link  href="#" className="text-gray-500 pt-1 hover:text-red-400">Mot de passe oublié ?</Link>
                </div>
                <Button classes={"bg-red-input w-full rounded-full p-1.5 text-white hover:bg-red-input-hover"} label={"Connexion"}/>
                <p className="text-white text-center pt-2">Pas encore de compte ? <Link href="/auth/register" className="text-red-400 hover:underline">Inscrivez-vous</Link></p>
            </form>
        </div>
    )
}

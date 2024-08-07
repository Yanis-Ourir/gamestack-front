'use client';
import Image from "next/image";
import Input from "@/app/ui/form/input";
import Link from "next/link";
import Button from "@/app/ui/form/button";

export default function Register() {
    function handleSubmit(e: any) {
        e.preventDefault();
        const { pseudo, email, password } = e.target.elements;
        console.log(email.value, password.value);
        registerRequest(pseudo.value, email.value, password.value);
    }

    function registerRequest(pseudoValue: string, emailValue: string, passwordValue: string) {
        fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pseudo: pseudoValue,
                email: emailValue,
                password: passwordValue
            }),
        }).then(async (response) => {
            window.location.href = "/auth/login";
            localStorage.setItem('success', 'Inscription réussie, veuillez vous connecter');
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    return <div className="flex flex-col items-center justify-center">
        <Image src="/assets/place_holder_logo.png" alt={"Logo gamestack"} width={200} height={200}/>
        <form className="space-y-6 bg-gray-900 px-12  py-8 md:w-1/3 rounded-lg text-2xl mb-[4rem]" method="POST"
              onSubmit={handleSubmit}>
            <Input label={"Pseudo :"} type={"text"} id={"#inputPseudo"} name={"pseudo"} required={true}
                className={"input-login"} />
            <Input label={"Email :"} type={"email"} id={"#inputEmail"} name={"email"} required={true}
                   className={"input-login"}/>
            <Input label={"Mot de passe :"} type={"password"} id={"#inputPassword"} name={"password"} required={true}
                   className={"input-login"}/>
              
            <Button classes={"bg-red-input w-full rounded-full p-1.5 text-white hover:bg-red-input-hover"}
                    label={"Inscription"}/>
            <p className="text-white text-center pt-2">Vous avez déjà un compte ? <Link href="/auth/login" className="text-red-400 hover:underline">Connectez-vous</Link>
            </p>
        </form>
    </div>
}

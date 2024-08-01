'use client';
import Image from "next/image";
import Input from "@/app/ui/form/input";
import Link from "next/link";
import Button from "@/app/ui/form/button";

export default function Register() {
    const handleSubmit = () => {

    }

    return <div className="flex flex-col items-center justify-center">
        <Image src="/assets/place_holder_logo.png" alt={"Logo gamestack"} width={200} height={200}/>
        <form className="space-y-6 bg-gray-900 px-12  py-8 md:w-1/3 rounded-lg text-2xl" method="POST"
              onSubmit={handleSubmit}>
            <Input label={"Email :"} type={"email"} id={"#inputEmail"} name={"email"} required={true}
                   className={"input-login"}/>
            <Input label={"Mot de passe :"} type={"password"} id={"#inputPassword"} name={"password"} required={true}
                   className={"input-login"}/>
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <Input label={null} type={"checkbox"} id={"#inputRememberMe"} name={"rememberMe"} required={false}
                           className={""}/>
                    <label htmlFor={"#inputRememberMe"} className="text-white pt-1">Se souvenir de moi</label>
                </div>
            <Button classes={"bg-red-input w-full rounded-full p-1.5 text-white hover:bg-red-input-hover"}
                    label={"Inscription"}/>
            <p className="text-white text-center pt-2">Vous avez déjà un compte ? <Link href="/auth/login" className="text-red-400 hover:underline">Connectez-vous</Link>
            </p>
        </form>
    </div>
}

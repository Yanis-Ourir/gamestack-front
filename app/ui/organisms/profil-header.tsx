'use client';
import parseTokenIfPresent from "@/app/lib/checkToken";
import parseJWT from "@/app/lib/parseJWT";
import findUser from "@/app/lib/userCrud";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type User = {
    pseudo: string;
    email: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export default function ProfilHeader() {
    const [user, setUser] = useState<User>();
    const payloadToken = parseTokenIfPresent();


    async function fetchData() {
        const data = await findUser();
        setUser(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

   

    return (
        <>
            <div className="relative">
                {/* Background with gradient */}
                <div className="gradiant-bg h-[10rem]"></div>
                <div className="flex justify-between items-start mt-4 px-4">
                    <div className="text-gray-500 text-xl md:text-2xl md:flex gap-2">
                        <p>Reviews : 12</p>
                        <p>Listes : 4</p>
                        <p>Jeux complétés : 89</p>
                    </div>
                    <div className="md:pe-12 z-50">
                        <Link href="/profil/edit"
                                className="border-gray-600 rounded-full border text-white px-4 text-xl md:text-2xl hover:bg-slate-600 hover:cursor-pointer">Éditer
                            le profil</Link>
                    </div>
                </div>
                {/* Profile picture, slightly overlapping the background */}
                <div className="absolute inset-x-0 top-[6rem] flex justify-center">
                    <div className="text-center">
                    <Image src="/assets/static_images/icon-default.jpg" alt="avatar"
                                className="rounded-full" width={150} height={150}/>
                        <p className="text-4xl text-white mt-2">{payloadToken?.pseudo}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={"text-3xl text-gray-500 mt-24 px-4"}>{user?.description}</p>
            </div>
        </>
    )
}
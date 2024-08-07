'use client';
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import parseJWT from "../lib/parseJWT";

type User = {
    pseudo: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export default function Profil({children}: { children: React.ReactNode[]}) {
    const token = localStorage.getItem('token');
    const [user, setUser] = React.useState<User>();
    if(!token) {
        window.location.href = '/auth/login';
        return;
    }

    const findUser = () => {
        const payloadToken = parseJWT(token);
        fetch(`http://localhost:8000/api/user/` + payloadToken.pseudo, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(async (response) => {
            const data = await response.json();
            console.log(data);
            setUser(data);
            return data;
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        findUser();
    }, []);

    return (
        <div>
            <section>
                <div className="relative">
                    {/* Background with gradient */}
                    <div className="gradiant-bg h-[10rem]"></div>
                    <div className="flex justify-between items-start mt-4 px-4">
                        <div className="text-gray-500 text-2xl flex gap-2">
                            <p>Reviews : 12</p>
                            <p>Listes : 4</p>
                            <p>Jeux complétés : 89</p>
                        </div>
                        <div className="pe-12">
                            <Link href="#"
                                  className="border-gray-600 rounded-full border text-white px-4 text-2xl hover:bg-gray-800">Éditer
                                le profil</Link>
                        </div>
                    </div>
                    {/* Profile picture, slightly overlapping the background */}
                    <div className="absolute inset-x-0 top-[6rem] flex justify-center">
                        <div className="text-center">
                        <Image src="/assets/static_images/icon-default.jpg" alt="avatar"
                                   className="rounded-full" width={150} height={150}/>
                            <p className="text-4xl text-white mt-2">{user?.pseudo}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={"text-3xl text-gray-500 mt-24 px-4"}>Passionné de jeux vidéo depuis toujours, je suis toujours à la recherche de nouvelles expériences ludiques et immersives.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        J'adore explorer de nouveaux mondes, relever des défis et découvrir des histoires captivantes.</p>
                </div>
            </section>

            <section className="flex text-4xl justify-around mt-16 text-white" id={"profil-nav"}>
                <Link href={"/profil"} className={"hover:text-hover-red hover:underline active:text-hover-red active:underline"}>Listes</Link>
                <Link href={"/profil/reviews"} className={"hover:text-hover-red"}>Évaluations</Link>
                <Link href={"#"} className={"hover:text-hover-red"}>Favoris</Link>
                <Link href={"#"} className={"hover:text-hover-red active:text-hover-red"}>Stats</Link>
            </section>

            <section>
                {children}
            </section>
        </div>
    );
}


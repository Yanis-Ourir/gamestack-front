'use client';
import Link from "next/link";
import Input from "../ui/atoms/input";
import { useState } from "react";
import GameFilter from "../ui/form/filter";
import SearchGameDetails from "../ui/molecule/search-game-details";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    const [search, setSearch] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(search);
    }
    return (
        <>
            <section>
                <div className="text-white text-4xl flex justify-around mt-[3rem]">
                    <Link href={"/search/game"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Jeux</Link>
                    <Link href={"/search/user"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Utilisateurs</Link>
                    <Link href={"/search/list"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Listes</Link>
                </div>
            </section>

            <section className="mt-[3rem] p-4 w-1/2">
                <label htmlFor="search" className="sr-only">Rechercher un jeu</label>
                <input type="text" className="input-login p-2" placeholder="Rechercher un jeu" onChange={handleSearch} />
            </section>

            {!search ? (
                <section className="text-2xl text-white p-[2rem]">
                    {children}
                </section>
            ) : (
                <section className="text-2xl text-white p-[2rem]">
                    <SearchGameDetails gameName={search} />
                </section>
            )}
        </>
    )
}
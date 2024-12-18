'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchGameDetails from "../ui/molecule/search-game-details";
import RecommendedGames from "../ui/organisms/recommended-games";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    const [search, setSearch] = useState<string>("");
    const [debouncedSearch, setDebouncedSearch] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

  
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search); 
        }, 2000);

        return () => clearTimeout(handler); 
    }, [search]);

    return (
        <>
            <section>
                <div className="text-white text-4xl flex justify-around mt-[3rem]">
                    <Link href={"/search/game"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Games</Link>
                    <Link href={"/search/list"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Lists</Link>
                    <Link href={"/search/user"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Users</Link>
                </div>
            </section>

            <section className="mt-[3rem] p-4">
                <label htmlFor="search" className="text-2xl text-white p-2">Search</label>
                <input
                    type="text"
                    className="input-login p-2"
                    placeholder="Zelda..."
                    onChange={handleSearch}
                />
            </section>

            {!debouncedSearch ? (
                <section className="text-2xl text-white p-[2rem]">
                    {children}
                </section>
            ) : (
                <section className="text-2xl text-white p-[2rem]">
                    <SearchGameDetails gameName={debouncedSearch} />
                </section>
            )}

            <section className={"text-2xl text-white p-[2rem]"}>
                <RecommendedGames />
            </section>
        </>
    );
}

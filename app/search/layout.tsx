import Link from "next/link";
import Input from "../ui/atoms/input";

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <section>
                <div className="text-white text-4xl flex justify-around mt-[3rem]">
                    <Link href={"/search/game"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Jeux</Link>
                    <Link href={"/search/user"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Utilisateurs</Link>
                    <Link href={"/search/list"} className={"hover:text-hover-red active:text-hover-red active:underline"}>Listes</Link>
                </div>
                <div className="p-4 text-2xl justify-center flex my-12">
                    <Input label={""} type={"text"} id={"search"} name={"search"} required={true} className={"input-login text-2xl w-[50rem]"}/>
                </div>
            </section>

            <section className="text-2xl text-white p-[2rem]">
                {children}
            </section>
        </>
    )
}
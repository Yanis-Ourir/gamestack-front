import Link from "next/link";
import ProfilHeader from "../ui/organisms/profil-header";

export default function Profil({children}: { children: React.ReactNode[]}) {


    return (
        <div>
            <section>
                    <ProfilHeader/>
            </section>

            <section className="flex text-4xl justify-around mt-16 text-white" id={"profil-nav"}>
                <Link href={"/profil"} className={"hover:text-hover-red active:text-hover-red active:underline [&.active]:text-hover-red"}>Listes</Link>
                <Link href={"/profil/reviews"} className={"hover:text-hover-red active:text-hover-red active:underline [&.active]:text-hover-red"}>Évaluations</Link>
                <Link href={"#"} className={"hover:text-hover-red"}>Favoris</Link>
                <Link href={"#"} className={"hover:text-hover-red active:text-hover-red"}>Stats</Link>
            </section>

            <section>
                {children}
            </section>

        </div>
    );
}


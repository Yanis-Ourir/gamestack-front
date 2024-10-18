import Link from "next/link";
import ProfilHeader from "../ui/organisms/profil-header";

export default function Profil({children}: { children: React.ReactNode[]}) {


    return (
        <div>
            <section>
                    <ProfilHeader/>
            </section>

            <section>
                {children}
            </section>

        </div>
    );
}


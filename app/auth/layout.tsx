import Navbar from "@/app/ui/navbar";

export default function Auth({children}: { children: React.ReactNode}) {
    return (
        <>
            <Navbar/>
            <div>
                <h1>Game Stack</h1>
                {children}
            </div>
        </>
    )
}

import MostLikedList from "@/app/ui/organisms/most-liked-list";

export default async function ListSearch() {

    return (
        <>
            <MostLikedList limit={10}/>
        </>
    )
}
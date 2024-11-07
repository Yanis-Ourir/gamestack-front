import ListDetails, { ListDetailsProps } from "../molecule/list-details";
import { findMostLikedList } from "@/app/lib/listCrud";

interface MostLikedListProps {
    limit: number;
}

export default async function MostLikedList({limit}: MostLikedListProps) {
    const lists: ListDetailsProps[] = await findMostLikedList(limit);
   
    return (
        <>
            {lists?.map((list, index) => (
                <ListDetails
                    {...list}
                />
            ))}
        </>
    )
}
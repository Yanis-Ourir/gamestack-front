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
                    key={index}
                    id={list.id}
                    name={list.name}
                    description={list.description}
                    image={list.image ? `${process.env.NEXT_PUBLIC_API_URL}/storage/` + list.image : "/assets/static_images/retro_gaming.jpg"}
                    likes={list.likes}
                    updated_at={list.updated_at}
                    avatar={list.user.image ? `${process.env.NEXT_PUBLIC_API_URL}/storage/${list.user.image}` : "/assets/static_images/icon-default.jpg"}
                    user={list.user}
                    games={list.games}
                />
            ))}
        </>
    )
}
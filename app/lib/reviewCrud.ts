import { checkToken } from "./parseJWT";

export type ReviewProps = {
    description: string;
    gameId: string;
    gameListId: string;
    statusId: number;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function addReview({description, gameId, gameListId, statusId}: ReviewProps) {
    const token = checkToken();
    return fetch(`${apiUrl}/api/reviews`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: description,
            game_id: gameId,
            game_list_id: gameListId,
            status_id: statusId,
        }),
    })
};

export function editReview({description, gameId, gameListId, statusId}: ReviewProps) {
    return fetch(`${apiUrl}/api/review`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: description,
            game_id: gameId,
            game_list_id: gameListId,
            status_id: statusId,
        }),
    })
}

export function deleteReview(id: string) {
    return fetch(`${apiUrl}/api/review/${id}`, {
        method: "DELETE",
    });
}
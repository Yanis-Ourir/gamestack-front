export type ReviewProps = {
    description: string;
    gameId: string;
    gameListId: string;
    statusId: number;
};

export default function addReview({description, gameId, gameListId, statusId}: ReviewProps) {
    return fetch("http://localhost:8000/api/reviews", {
        method: "POST",
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
};

export function editReview({description, gameId, gameListId, statusId}: ReviewProps) {
    return fetch("http://localhost:8000/api/review", {
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
    return fetch(`http://localhost:8000/api/review/${id}`, {
        method: "DELETE",
    });
}
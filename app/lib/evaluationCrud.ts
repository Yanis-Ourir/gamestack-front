import parseTokenIfPresent from "./checkToken";

export type Evaluation = {
    rating: number;
    description: string;
    gameTime: string;
    gameId: string;
    platforms: string[];
    statusId: number;
    userId: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function addEvaluation({ rating, description, gameTime, gameId, platforms, statusId }: Evaluation) {
    const token = parseTokenIfPresent();

    try {
        await fetch(`${apiUrl}/api/evaluations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rating: rating,
                description: description,
                game_time: gameTime,
                game_id: gameId,
                platforms: platforms,
                status_id: statusId,
                user_id: token.id,
            }),
        });
        return 'Evaluation ajoutée avec succès !';
    } catch (error) {
        console.error(error);
        return 'Erreur dans la création de votre évaluation. Veuillez réessayer.';
    }
}


// export async function getEvaluationsByGameId(gameId: number) {
//     try {
//         const response = await fetch(`${apiUrl}/api/evaluations/game/${gameId}`);
//         const evaluations = await response.json();
//         return evaluations;
//     } catch (error) {
//         console.error(error);
//         return 'Erreur dans la récupération des évaluations. Veuillez réessayer.';
//     }
// }

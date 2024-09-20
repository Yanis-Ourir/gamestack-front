import parseTokenIfPresent from "./checkToken";

export type Evaluation = {
    rating: number;
    description: string;
    gameTime: string;
    gameId: number;
    platforms: string[] | string;
    statusId: number;
    userId: string;
}

export default function addEvaluation({ rating, description, gameTime, gameId, platforms, statusId }: Evaluation) {
    const token = parseTokenIfPresent();

    try {
        fetch('http://localhost:8000/api/evaluations', {
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
    }
}
import parseTokenIfPresent from './checkToken';

export type LikeDislikeProps = {
    likeableId: string | number;
    likeableType: string;
};

const performAction = async (url: string, method: string, body: object | null = null) => {
    try {
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error:', errorText);
            throw new Error('Erreur lors de l\'opération');
        }

        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const addLike = ({ likeableId, likeableType }: LikeDislikeProps) => {
    const payloadToken = parseTokenIfPresent();
    return performAction(`http://localhost:8000/api/likes`, 'POST', {
        user_id: payloadToken.id,
        likeable_id: likeableId,
        likeable_type: `App\\Models\\${likeableType}`,
    });
};

export const removeLike = (likeId: number | null) => {
    return performAction(`http://localhost:8000/api/like/${likeId}`, 'DELETE');
};

export const addDislike = ({ likeableId, likeableType }: LikeDislikeProps) => {
    const payloadToken = parseTokenIfPresent();
    return performAction(`http://localhost:8000/api/dislikes`, 'POST', {
        user_id: payloadToken.id,
        dislikeable_id: likeableId,
        dislikeable_type: `App\\Models\\${likeableType}`,
    });
};

export const removeDislike = (dislikeId: number | null) => {
    return performAction(`http://localhost:8000/api/dislike/${dislikeId}`, 'DELETE');
};

export const checkIfUserAlreadyLiked = ({ likeableId, likeableType }: LikeDislikeProps) => {
    const payloadToken = parseTokenIfPresent();
    return performAction(`http://localhost:8000/api/like/${likeableId}/check-user/${payloadToken.id}/type/${likeableType}`, 'GET');
};

export const checkIfUserAlreadyDisliked = ({ likeableId, likeableType }: LikeDislikeProps) => {
    const payloadToken = parseTokenIfPresent();
    return performAction(`http://localhost:8000/api/dislike/${likeableId}/check-user/${payloadToken.id}/type/${likeableType}`, 'GET');
};

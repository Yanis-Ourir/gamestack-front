import parseTokenIfPresent from './checkToken';
import { checkToken } from './parseJWT';

export type LikeDislikeProps = {
    likeableId: string | number;
    likeableType: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const performAction = async (url: string, method: string, body: object | null = null, token: string | null = null) => {
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error:', errorText);
            throw new Error('Error performing action');
        }

        return response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const addLike = ({ likeableId, likeableType }: LikeDislikeProps) => {
    const payloadToken = parseTokenIfPresent();
    const token = checkToken();
    return performAction(`${apiUrl}/api/likes`, 'POST', {
        user_id: payloadToken.id,
        likeable_id: likeableId,
        likeable_type: `App\\Models\\${likeableType}`,
    }, token);
};

export const removeLike = (likeId: number | null) => {
    const token = checkToken();
    return performAction(`${apiUrl}/api/like/${likeId}`, 'DELETE', null, token);
};

export const addDislike = ({ likeableId, likeableType }: LikeDislikeProps) => {
    const payloadToken = parseTokenIfPresent();
    const token = checkToken();
    return performAction(`${apiUrl}/api/dislikes`, 'POST', {
        user_id: payloadToken.id,
        dislikeable_id: likeableId,
        dislikeable_type: `App\\Models\\${likeableType}`,
    }, token);
};

export const removeDislike = (dislikeId: number | null) => {
    const token = checkToken();
    return performAction(`${apiUrl}/api/dislike/${dislikeId}`, 'DELETE', null, token);
};

export const checkIfUserAlreadyLiked = ({ likeableId, likeableType }: LikeDislikeProps) => {
    const payloadToken = parseTokenIfPresent();
    return performAction(`${apiUrl}/api/like/${likeableId}/check-user/${payloadToken.id}/type/${likeableType}`, 'GET');
};

export const checkIfUserAlreadyDisliked = ({ likeableId, likeableType }: LikeDislikeProps) => {
    const payloadToken = parseTokenIfPresent();
    return performAction(`${apiUrl}/api/dislike/${likeableId}/check-user/${payloadToken.id}/type/${likeableType}`, 'GET');
};
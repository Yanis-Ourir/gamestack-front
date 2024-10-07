import { addLike, removeLike, addDislike, removeDislike } from '@/app/lib/likeCrud';

interface ToggleLikeDislikeProps {
    isLike: boolean; // true if it's a like action, false for dislike
    liked: boolean | null;
    likeableId: string | number;
    likeableType: string;
    likeId: number | null;
    dislikeId: number | null;
    setLikes: React.Dispatch<React.SetStateAction<number>>;
    setDislikes: React.Dispatch<React.SetStateAction<number>>;
    setLiked: React.Dispatch<React.SetStateAction<boolean | null>>;
    setLikeId: React.Dispatch<React.SetStateAction<number | null>>;
    setDislikeId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const toggleLikeDislike = async ({
    isLike,
    liked,
    likeableId,
    likeableType,
    likeId,
    dislikeId,
    setLikes,
    setDislikes,
    setLiked,
    setLikeId,
    setDislikeId,
}: ToggleLikeDislikeProps) => {
    if (isLike) {
        if (liked === true) {
            // If already liked, remove like
            setLikes((prev) => prev - 1);
            setLiked(null);
            removeLike(likeId);
        } else {
            // If disliked, remove dislike
            if (liked === false) {
                setDislikes((prev) => prev - 1);
                removeDislike(dislikeId);
            }
            // Add like
            setLikes((prev) => prev + 1);
            setLiked(true);
            addLike({ likeableId, likeableType });
        }
    } else {
        if (liked === false) {
            // If already disliked, remove dislike
            setDislikes((prev) => prev - 1);
            setLiked(null);
            removeDislike(dislikeId);
        } else {
            // If liked, remove like
            if (liked === true) {
                setLikes((prev) => prev - 1);
                removeLike(likeId);
            }
            // Add dislike
            setDislikes((prev) => prev + 1);
            setLiked(false);
            addDislike({ likeableId, likeableType });
        }
    }
};

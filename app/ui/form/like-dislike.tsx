import { useEffect, useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import {checkIfUserAlreadyLiked,checkIfUserAlreadyDisliked} from '@/app/lib/likeCrud';
import {toggleLikeDislike} from '@/app/lib/toggleLikeDislike';

interface LikeDislikeProps {
    initialLikes: number;
    initialDislikes: number;
    likeableId: string | number;
    likeableType: string;
}

export default function LikeDislike({ initialLikes, initialDislikes, likeableId, likeableType }: LikeDislikeProps) {
    const [likes, setLikes] = useState<number>(initialLikes);
    const [dislikes, setDislikes] = useState<number>(initialDislikes);
    const [liked, setLiked] = useState<boolean | null>(null); // true = liked, false = disliked, null = neither
    const [likeId, setLikeId] = useState<number | null>(null);
    const [dislikeId, setDislikeId] = useState<number | null>(null);

    useEffect(() => {
        checkIfUserAlreadyLiked({ likeableId, likeableType }).then((response) => {
            if (response.id) {
                setLikeId(response.id);
                setLiked(true);
            }
        });

        checkIfUserAlreadyDisliked({ likeableId, likeableType }).then((response) => {
            if (response.id) {
                setDislikeId(response.id);
                setLiked(false);
            }
        });
    }, [dislikes, likes]);

    const handleLike = () => {
        toggleLikeDislike({
            isLike: true,
            liked,
            likeableId,
            likeableType,
            likeId,
            dislikeId,
            setLikes,
            setDislikes,
            setLiked,
            setLikeId,
            setDislikeId
        });
    };

    const handleDislike = () => {
        toggleLikeDislike({
            isLike: false,
            liked,
            likeableId,
            likeableType,
            likeId,
            dislikeId,
            setLikes,
            setDislikes,
            setLiked,
            setLikeId,
            setDislikeId
        });
    };

    return (
        <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
                <button
                    onClick={handleLike}
                    className={`p-2 rounded-full transition-colors duration-300 ${liked === true ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600 hover:bg-green-400'}`}
                >
                    <AiFillLike size={24} />
                </button>
                <span className="text-lg text-white">{likes}</span>
            </div>

            <div className="flex items-center space-x-2">
                <button
                    onClick={handleDislike}
                    className={`p-2 rounded-full transition-colors duration-300 ${liked === false ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-600 hover:bg-red-400'}`}
                >
                    <AiFillDislike size={24} />
                </button>
                <span className="text-lg text-white">{dislikes}</span>
            </div>
        </div>
    );
}

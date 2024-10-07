import { useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai'; // Utilisation des icônes React

interface LikeDislikeProps {
    initialLikes: number;
    initialDislikes: number;
}

export default function LikeDislike({ initialLikes, initialDislikes }: LikeDislikeProps) {
    const [likes, setLikes] = useState<number>(initialLikes);
    const [dislikes, setDislikes] = useState<number>(initialDislikes);
    const [liked, setLiked] = useState<boolean | null>(null); // null = ni like ni dislike, true = like, false = dislike

    const handleLike = () => {
        if (liked === true) {
            setLikes(likes - 1);
            setLiked(null); // Annule le like
        } else {
            setLikes(liked === false ? likes + 1 : likes + 1); // Si déjà disliké, enlever un dislike
            if (liked === false) setDislikes(dislikes - 1);
            setLiked(true);
        }
    };

    const handleDislike = () => {
        if (liked === false) {
            setDislikes(dislikes - 1);
            setLiked(null); // Annule le dislike
        } else {
            setDislikes(liked === true ? dislikes + 1 : dislikes + 1); // Si déjà liké, enlever un like
            if (liked === true) setLikes(likes - 1);
            setLiked(false);
        }
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

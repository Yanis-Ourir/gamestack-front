import { useState } from 'react';

interface FilterProps {
    gameList: any[]; // Type selon la structure des jeux
}

export default function GameFilter({ gameList }: FilterProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
    const [sortRating, setSortRating] = useState<string>('none'); // 'asc' ou 'desc'

    // Liste des plateformes et tags disponibles
    const allTags = ['RPG', 'Action', 'Adventure', 'Platformer']; // A ajuster selon tes tags réels
    const allPlatforms = ['PC', 'PlayStation 5', 'Xbox Series S/X', 'Nintendo Switch', 'macOS'];

    // Fonction de gestion des filtres
    const filterGames = () => {
        let filteredGames = gameList;

        // Filtre par recherche
        if (searchTerm) {
            filteredGames = filteredGames.filter(game =>
                game.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filtre par tags
        if (selectedTags.length > 0) {
            filteredGames = filteredGames.filter(game =>
                selectedTags.every(tag => game.tags.includes(tag))
            );
        }

        // Filtre par plateformes
        if (selectedPlatforms.length > 0) {
            filteredGames = filteredGames.filter(game =>
                selectedPlatforms.every(platform => game.platforms.includes(platform))
            );
        }

        // Tri par note
        if (sortRating !== 'none') {
            filteredGames = filteredGames.sort((a, b) => {
                if (sortRating === 'asc') return a.rating - b.rating;
                if (sortRating === 'desc') return b.rating - a.rating;
                return 0;
            });
        }

        return filteredGames;
    };

    // Gestion des changements de tags
    const handleTagChange = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    // Gestion des changements de plateformes
    const handlePlatformChange = (platform: string) => {
        if (selectedPlatforms.includes(platform)) {
            setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
        } else {
            setSelectedPlatforms([...selectedPlatforms, platform]);
        }
    };

    return (
        <div className="space-y-6 text-white">
            <div className="flex flex-col lg:flex-row lg:space-x-6">
                {/* Recherche par nom */}
                <input
                    type="text"
                    placeholder="Rechercher un jeu"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-login mb-4 lg:mb-0"
                />

                {/* Filtre par tags */}
                <div className="flex flex-wrap space-x-2 mb-4 lg:mb-0">
                    {allTags.map((tag) => (
                        <label key={tag} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagChange(tag)}
                            />
                            <span>{tag}</span>
                        </label>
                    ))}
                </div>

                {/* Filtre par plateformes */}
                <div className="flex flex-wrap space-x-2 mb-4 lg:mb-0">
                    {allPlatforms.map((platform) => (
                        <label key={platform} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedPlatforms.includes(platform)}
                                onChange={() => handlePlatformChange(platform)}
                            />
                            <span>{platform}</span>
                        </label>
                    ))}
                </div>

                {/* Tri par note */}
                <div className="flex items-center space-x-2">
                    <label htmlFor="sort-rating">Trier par note :</label>
                    <select
                        id="sort-rating"
                        value={sortRating}
                        onChange={(e) => setSortRating(e.target.value)}
                        className="input-login"
                    >
                        <option value="none">Aucun</option>
                        <option value="asc">Note ascendante</option>
                        <option value="desc">Note descendante</option>
                    </select>
                </div>
            </div>

            {/* Affichage des jeux filtrés */}
            <div>
                {filterGames().map((game, index) => (
                    <div key={index} className="border-b border-gray-700 py-4">
                        <h3 className="text-xl">{game.name}</h3>
                        <p>Note: {game.rating}</p>
                        {/* Plateformes et tags affichés */}
                        <div className="flex space-x-2">
                            {game.platforms.map((platform: string) => (
                                <span key={platform} className="bg-purple-600 px-2 py-1 rounded-full">
                                    {platform}
                                </span>
                            ))}
                            {game.tags.map((tag: string) => (
                                <span key={tag} className="bg-red-600 px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

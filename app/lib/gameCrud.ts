import { GameDetailsProps } from "../ui/molecule/game-details";



export default function findGameById(gameId: string): Promise<GameDetailsProps> | null {
    return fetch(`http://localhost:8000/api/games/${gameId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => response.json())
        .then((data) => {
            return data;
        }).catch((error) => {
            console.error('Error:', error);
        });
}

export async function findGameByName(gameName: string): Promise<GameDetailsProps> {
    return fetch(`http://localhost:8000/api/game/${gameName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => response.json())
        .then((data) => {
            return data;
        }).catch((error) => {
            console.error('Error:', error);
        });
}

export async function findByGameSlug(slug: string | string[]): Promise<GameDetailsProps> {
    return fetch(`http://127.0.0.1:8000/api/game/slug/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => response.json())
        .then((data) => {
            return data;
        }).catch((error) => {
            console.error('Error:', error);
        });
}

export function findTenMostRatedGames(): Promise<GameDetailsProps[]> {
    return fetch(`http://localhost:8000/api/games/rating`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        }).catch((error) => {
            console.error('Error:', error);
        });
}
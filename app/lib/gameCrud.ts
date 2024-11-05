import { GameDetailsProps } from "../ui/molecule/game-details";
import parseTokenIfPresent from "./checkToken";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;



// export default function findGameById(gameId: string): Promise<GameDetailsProps> | string  {
//     return fetch(`http://localhost:8000/api/games/${gameId}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }).then(async (response) => response.json())
//         .then((data) => {
//             return data;
//         }).catch((error) => {
//             console.error('Error:', error);
//             return 'Error game not found';
//         });
// }

// // export async function findGameByName(gameName: string): Promise<GameDetailsProps> {
// //     return fetch(`http://localhost:8000/api/game/${gameName}`, {
// //         method: 'GET',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //     }).then(async (response) => response.json())
// //         .then((data) => {
// //             return data;
// //         }).catch((error) => {
// //             console.error('Error:', error);
// //         });
// // }

// export async function findByGameSlug(slug: string | string[]): Promise<GameDetailsProps> {
//     return fetch(`http://127.0.0.1:8000/api/game/slug/${slug}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }).then(async (response) => response.json())
//         .then((data) => {
//             return data;
//         }).catch((error) => {
//             console.error('Error:', error);
//         });
// }

// export function findTenMostRatedGames(): Promise<GameDetailsProps[]> {
//     return fetch(`http://localhost:8000/api/games/rating`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }).then(async (response) => response.json())
//         .then((data) => {
//             console.log(data);
//             return data;
//         }).catch((error) => {
//             console.error('Error:', error);
//         });
// }

async function fetchGameData<T>(endpoint: string): Promise<T> {
    try {
        const response = await fetch(`${apiUrl}/api/${endpoint}`, { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching games data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error fetching data');
    }
}


export function findGameById(gameId: string): Promise<GameDetailsProps> {
    return fetchGameData<GameDetailsProps>(`games/${gameId}`);
}

export function findByGameSlug(slug: string | string[]): Promise<GameDetailsProps> {
    return fetchGameData<GameDetailsProps>(`game/slug/${slug}`);
}

export function findTenMostRatedGames(): Promise<GameDetailsProps[]> {
    return fetchGameData<GameDetailsProps[]>(`games/rating`);
}

export function findBySearch(search: string): Promise<GameDetailsProps[]> {
    return fetchGameData<GameDetailsProps[]>(`games/search/${search}`);
}

export async function findGamesRecommendation(): Promise<GameDetailsProps[]> {
    const payloadToken = parseTokenIfPresent();
    return fetchGameData<GameDetailsProps[]>(`games/recommendation/${payloadToken.id}`);
}
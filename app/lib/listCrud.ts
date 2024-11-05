import { GameReviewProps } from "../ui/molecule/game-reviews";
import { ListDetailsProps } from "../ui/molecule/list-details";
import parseTokenIfPresent from "./checkToken";
import parseJWT from "./parseJWT";

type List = {
    listName: string;
    listDescription: string;
    listImage: File;
    listVisibility: string;
}

export type ListData = {
    id: string;
    name: string;
    description: string;
    is_private: boolean;
    user_id: number;
    image: string;
    updated_at: string;
    user: User;
    likes: number;
    dislikes: number;
    games: GameReviewProps[];
    is_game_in_list?: boolean;
}

type User = {
    id: number;
    pseudo: string;
    image: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function createListRequest({ listName, listDescription, listVisibility, listImage }: List) {
  
    const payloadToken = parseTokenIfPresent();

    const formData = new FormData();
    formData.append('name', listName);
    formData.append('description', listDescription);
    formData.append('is_private', listVisibility);
    formData.append('user_id', payloadToken.id);
    formData.append('image', listImage);
    console.log(formData);

    try {
        const response = await fetch(`${apiUrl}/api/game-lists`, {
            method: 'POST',
            body: formData,
        });

        console.log(response);

        return 'Liste créée avec succès !';
    } catch (error) {
        console.error(error);
        return 'Erreur dans la création de votre liste. Veuillez réessayer.';
    }
}


export async function findGameListOfUser() {
    const payloadToken = parseTokenIfPresent();
    try {
        const response = await fetch(`${apiUrl}/api/game-lists/user/` + payloadToken.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Erreur dans la récupération de vos listes de jeux.');
    }
}

export async function findListAndCheckIfGameIsIn(gameId: any) {
    const payloadToken = parseTokenIfPresent();
    try {
        const response = await fetch(`${apiUrl}/api/game-list/${payloadToken.id}/game/${gameId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Erreur dans la récupération de vos listes de jeux.');
    }
}


export async function findListById(id: string | string[]): Promise<ListData> {
    return fetch(`${apiUrl}/api/game-list/` + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(async (response) => response.json())
        .then((data) => {
            return data;
        }).catch((error) => {
            console.error('Error:', error);
            throw new Error('Erreur dans la récupération de la liste de jeux.');
        });
}

export async function deleteListById(id: string | string[]): Promise<{ success: boolean; message: string }> {
    const payloadToken = parseTokenIfPresent();
    try {
        const response = await fetch(`${apiUrl}/api/game-list/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error:', errorText);
            throw new Error('Erreur dans la suppression de la liste de jeux.');
        }

        const message = await response.text();
        console.log('Successfully deleted:', message);
        return { success: true, message };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Erreur dans la suppression de la liste de jeux.' };
    }
}

export async function findMostLikedList(limit: any): Promise<ListDetailsProps[]> {
    try {
        const response = await fetch(`${apiUrl}/api/game-lists/most-liked/${limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        const listsArray = Object.values(data).sort((a: any, b: any) => b.likes - a.likes);

        return listsArray as ListDetailsProps[];
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Erreur dans la récupération des listes les plus aimées.');
    }
}

export async function addGameToList(idList: string, idGame: string) {
    const payloadToken = parseTokenIfPresent();
    try {
        const response = await fetch(`${apiUrl}/api/game-lists/add-game`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                gameListId: idList,
                gameId: idGame,
            }),
        });
        const data = await response.json();
        console.log('Successfully added game to list:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Erreur dans l\'ajout du jeu à la liste.');
    }
}

export async function removeGameFromList(idGame: string, idList: string): Promise<{ success: boolean; message: string }> {
    console.log(idList, idGame);
    try {
        const response = await fetch(`${apiUrl}/api/game-lists/remove-game`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                game_list_id: idList,
                game_id: idGame,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
            throw new Error('Erreur dans la suppression du jeu de la liste.');
        }

        const data = await response.json();
        console.log('Successfully removed game from list:', data);
        return { success: true, message: 'Jeu supprimé de la liste avec succès.' };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, message: 'Erreur dans la suppression du jeu de la liste.' };
    }
}
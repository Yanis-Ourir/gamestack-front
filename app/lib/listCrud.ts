import { GameReviewProps } from "../ui/molecule/game-reviews";
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
}

type User = {
    id: number;
    username: string;
    avatar: string;
}

export async function createListRequest({ listName, listDescription, listVisibility, listImage }: List) {
  
    const payloadToken = parseTokenIfPresent();

    const formData = new FormData();
    formData.append('name', listName);
    formData.append('description', listDescription);
    formData.append('is_private', listVisibility);
    formData.append('user_id', payloadToken.id);
    formData.append('image', listImage); // Append the file to FormData

    try {
        const response = await fetch('http://localhost:8000/api/game-lists', {
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
    return fetch(`http://localhost:8000/api/game-lists/user/` + payloadToken.id, {
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
            throw new Error('Erreur dans la récupération de vos listes de jeux.');
        });
}


export async function findListById(id: string | string[]): Promise<ListData> {
    return fetch(`http://localhost:8000/api/game-list/` + id, {
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
            throw new Error('Erreur dans la récupération de la liste de jeux.');
        });
}

export async function deleteListById(id: string | string[]): Promise<{ success: boolean; message: string }> {
    const payloadToken = parseTokenIfPresent();
    try {
        const response = await fetch(`http://localhost:8000/api/game-list/${id}`, {
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

export async function addGameToList(idList: string, idGame: string) {
    const payloadToken = parseTokenIfPresent();
    return fetch(`http://localhost:8000/api/game-lists/add-game`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            gameListId: idList,
            gameId: idGame,
        }),
    }).then(async (response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        }).catch((error) => {
            console.error('Error:', error);
            throw new Error('Erreur dans l\'ajout du jeu à la liste.');
        });
}

export async function removeGameFromList(idList: string, idGame: string): Promise<{ success: boolean; message: string }> {
    console.log(idList, idGame);
    try {
        const response = await fetch(`http://localhost:8000/api/game-lists/remove-game`, {
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
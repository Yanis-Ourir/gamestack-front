import parseTokenIfPresent from "./checkToken";
import parseJWT from "./parseJWT";

type List = {
    listName: string;
    listDescription: string;
    listImage: File;
    listVisibility: string;
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


export async function findListById(id: string | string[]) {
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
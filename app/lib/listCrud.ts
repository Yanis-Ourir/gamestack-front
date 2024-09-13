import parseJWT from "./parseJWT";

export async function createListRequest(
    listName: string,
    listDescription: string,
    listImage: string,
    listVisibility: string
) {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
        return 'No token found';
    }
    const payloadToken = parseJWT(token);

    try {
        const response = await fetch('http://localhost:8000/api/game-lists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: listName,
                description: listDescription,
                is_private: listVisibility,
                user_id: payloadToken.id,
            }),
        });

        return 'Liste créée avec succès !';
    } catch (error) {
        console.error(error);
        return 'Erreur dans la création de votre liste. Veuillez réessayer.';
    }
}
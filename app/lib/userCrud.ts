import parseTokenIfPresent from "./checkToken";

type UpdateProfil = {
    profilPseudo: string;
    profilDescription: string;
    profilImage: File;
}

const endpoint = process.env.NEXT_PUBLIC_API_URL;

export default async function findUser() {
    const payloadToken = parseTokenIfPresent();
    try {
        const response = await fetch(`${endpoint}/api/user/` + payloadToken.pseudo, {
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
    }
}

export async function editUser({profilPseudo, profilDescription, profilImage}: UpdateProfil) : Promise<string>
{
    const payloadToken = parseTokenIfPresent();
    
    const formData = new FormData();
    formData.append('pseudo', profilPseudo);
    formData.append('description', profilDescription);
    formData.append('image', profilImage);

    try {
        const response = await fetch(`${endpoint}/api/users/test/${payloadToken.id}`, {
            method: 'POST',
            body: formData,
        });
        
        console.log(response);
        return 'Profil modifié avec succès !';
    } catch (error) {
        console.error('Error:', error);
        return 'Erreur dans la modification de votre profil. Veuillez réessayer.';
    }
}
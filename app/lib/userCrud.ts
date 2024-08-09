import parseJWT from "./parseJWT";

export default function findUser(token: string) {
    if (!token) {
        window.location.href = '/auth/login';
        return;
    }
    const payloadToken = parseJWT(token);
    return fetch(`http://localhost:8000/api/user/` + payloadToken.pseudo, {
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
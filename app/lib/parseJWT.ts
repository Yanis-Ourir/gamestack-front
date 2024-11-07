export default function parseJWT(token: string): any {
    try {
        const base64Payload = token.split('.')[1];
        const payload = Buffer.from(base64Payload, 'base64');
        return JSON.parse(payload.toString());
    } catch (e) {
        console.log(e);
        return null;
    }
}

export function checkToken(): any {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/auth/login'; 
        return;
    }
    return token;
}
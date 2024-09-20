import parseJWT from "./parseJWT";

export default function parseTokenIfPresent() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
        return 'No token found';
    }
    const payloadToken = parseJWT(token);
    return payloadToken;
}
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
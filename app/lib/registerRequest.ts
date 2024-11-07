const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default async function registerRequest(pseudoValue: string, emailValue: string, passwordValue: string): Promise<void | string> {
    try {
        const response = await fetch(`${apiUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                pseudo: pseudoValue,
                email: emailValue,
                password: passwordValue
            }),
        });

        const data = await response.json();

        console.log(data);

        if(data.errors) {
            return data.errors.password;
        }

        window.location.href = "/auth/login";
        localStorage.setItem('success', data.success);
    } catch (error) {
        console.error('Error:', error);
        return "Une erreur inattendue est survenue." + error;
    }
}
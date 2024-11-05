const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default async function registerRequest(pseudoValue: string, emailValue: string, passwordValue: string): Promise<void> {
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

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert('Erreur lors de l\'inscription: ' + (errorData.message || 'Veuillez réessayer.'));
            return;
        }

        window.location.href = "/auth/login";
        localStorage.setItem('success', 'Inscription réussie, veuillez vous connecter');
    } catch (error) {
        console.error('Error:', error);
        alert('Erreur lors de l\'inscription: Veuillez réessayer.');
    }
}
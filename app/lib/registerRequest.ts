export default function registerRequest(pseudoValue: string, emailValue: string, passwordValue: string) {
    fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pseudo: pseudoValue,
            email: emailValue,
            password: passwordValue
        }),
    }).then(async () => {
        window.location.href = "/auth/login";
        localStorage.setItem('success', 'Inscription réussie, veuillez vous connecter');
    }).catch((error) => {
        console.error('Error:', error);
    });
}
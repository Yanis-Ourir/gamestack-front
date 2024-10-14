type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
};

export default async function loginRequest(emailValue: string, passwordValue: string) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue
            }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data: LoginResponse = await response.json();
        localStorage.setItem('token', data.access_token);
        localStorage.removeItem('success');
        window.location.href = "/";
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed. Please check your email and password.');
    }
}
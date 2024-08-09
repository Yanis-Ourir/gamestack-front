'use client';

export default function Logout() {
    localStorage.removeItem('token');
    window.location.href = '/auth/login';

    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}
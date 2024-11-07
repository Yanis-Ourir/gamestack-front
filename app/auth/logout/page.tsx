'use client';

import Loader from "@/app/ui/molecule/loader";

export default function Logout() {
    localStorage.removeItem('token');
    window.location.href = '/auth/login';

    return (
        <Loader />
    )
}
'use client';

import Loader from "@/app/ui/molecule/loader";
import { useEffect } from "react";

export default function Logout() {

    useEffect(() => {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
    }, []);

    return (
        <Loader />
    )
}
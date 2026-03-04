"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Detect preferred language on client load
        const lang = navigator.language.startsWith("si") ? "si" : "en";
        router.replace(`/${lang}`);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            <span className="sr-only">Redirecting...</span>
        </div>
    );
}

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    type = "button",
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "border-transparent text-white bg-primary hover:bg-primary-dark focus:ring-primary shadow-sm",
        secondary: "border-transparent text-white bg-secondary hover:bg-secondary-dark focus:ring-secondary shadow-sm",
        outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary shadow-sm",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
}

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
    const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 border text-base font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "border-transparent text-white bg-[#f07814] hover:bg-[#cc6600] focus:ring-[#f07814] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        secondary: "border-transparent text-white bg-orange-500 hover:bg-orange-600 focus:ring-orange-500 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-[#f07814] shadow-sm hover:-translate-y-0.5",
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

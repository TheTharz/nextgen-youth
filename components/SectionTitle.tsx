interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
    return (
        <div className={`mb-12 ${centered ? "text-center" : ""}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
            {subtitle && (
                <p className={`mt-4 text-lg text-gray-600 w-full ${centered ? "mx-auto max-w-2xl" : "max-w-3xl"}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}

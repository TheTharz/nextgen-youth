import Image from "next/image";

interface ActivityCardProps {
    title: string;
    date?: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export default function ActivityCard({ title, date, description, imageSrc, imageAlt }: ActivityCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col h-full">
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
                {date && <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-4">{date}</p>}
                <p className="text-gray-600 leading-relaxed font-light flex-grow">{description}</p>
            </div>
        </div>
    );
}

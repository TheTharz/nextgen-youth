import Image from "next/image";
import Button from "@/components/Button";
import { getImagePath } from "@/utils/imagePath";

export default function HomeGallery({ dict, lang }: { dict: any, lang: string }) {
    const photos = [
        { src: "/assets/first_meeting/meeting1_1.jpg", alt: "Youth meeting" },
        { src: "/assets/second_meeting/meeting2_1.jpg", alt: "Community planning" },
        { src: "/assets/cleaning_campaing/cleaning5.jpg", alt: "Cleaning Campaign" },
        { src: "/assets/cleaning_campaing/before_cleaning.jpeg", alt: "Before Cleaning" },
        { src: "/assets/playing_in_cleaned_ground/playing3.jpg", alt: "Playing sports" },
        { src: "/assets/cleaning_campaing/cleaning1.jpg", alt: "Volunteering" },
        { src: "/assets/playing_in_cleaned_ground/playing1.jpg", alt: "Volleyball game" },
        { src: "/assets/first_meeting/meeting1_4.jpg", alt: "Youth gathering" },
    ];

    // Duplicate items for a seamless marquee loop
    const sliderItems = [...photos, ...photos];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{dict.home.gallery.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{dict.home.gallery.subtitle}</p>
            </div>

            <div className="relative w-full overflow-hidden flex whitespace-nowrap group">
                <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
                    {sliderItems.map((photo, index) => (
                        <div key={index} className="relative h-64 sm:h-80 w-80 sm:w-96 mx-3 sm:mx-4 rounded-2xl overflow-hidden shrink-0 shadow-md bg-gray-100">
                            <Image
                                src={getImagePath(photo.src)}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                                sizes="(max-width: 640px) 100vw, 400px"
                            />
                        </div>
                    ))}
                </div>

                {/* Left and Right Fade Overlays for a smoother look */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>

            <div className="mt-16 text-center">
                <Button href={`/${lang}/gallery`} variant="primary" className="shadow-[#f07814]/30 text-lg px-8 py-3.5">
                    {dict.home.gallery.view_more}
                </Button>
            </div>
        </section>
    );
}

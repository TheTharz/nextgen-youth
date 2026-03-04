import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { getDictionary } from "@/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "si");
  return {
    title: dict.gallery.title,
    description: dict.gallery.description,
  };
}

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "si");

  const photos = [
    { src: "/assets/first_meeting/meeting1_1.jpg", alt: "First Meeting Meeting1 1" },
    { src: "/assets/first_meeting/meeting1_2.jpg", alt: "First Meeting Meeting1 2" },
    { src: "/assets/first_meeting/meeting1_4.jpg", alt: "First Meeting Meeting1 4" },
    { src: "/assets/first_meeting/meeting1_5.jpg", alt: "First Meeting Meeting1 5" },
    { src: "/assets/first_meeting/meeting1_3.jpg", alt: "First Meeting Meeting1 3" },
    { src: "/assets/second_meeting/meeting2_1.jpg", alt: "Second Meeting Meeting2 1" },
    { src: "/assets/second_meeting/meeting2_2.jpg", alt: "Second Meeting Meeting2 2" },
    { src: "/assets/second_meeting/meeting2_5.jpg", alt: "Second Meeting Meeting2 5" },
    { src: "/assets/second_meeting/meeting2_4.jpg", alt: "Second Meeting Meeting2 4" },
    { src: "/assets/second_meeting/meeting2_3.jpg", alt: "Second Meeting Meeting2 3" },
    { src: "/assets/cleaning_campaing/before_cleaning.jpeg", alt: "Cleaning Campaing Before Cleaning" },
    { src: "/assets/cleaning_campaing/cleaning5.jpg", alt: "Cleaning Campaing Cleaning5" },
    { src: "/assets/cleaning_campaing/after_cleaning.jpeg", alt: "Cleaning Campaing After Cleaning" },
    { src: "/assets/cleaning_campaing/cleaning1.jpg", alt: "Cleaning Campaing Cleaning1" },
    { src: "/assets/cleaning_campaing/cleaning2.jpg", alt: "Cleaning Campaing Cleaning2" },
    { src: "/assets/cleaning_campaing/cleaning7.jpg", alt: "Cleaning Campaing Cleaning7" },
    { src: "/assets/cleaning_campaing/cleaning3.jpg", alt: "Cleaning Campaing Cleaning3" },
    { src: "/assets/cleaning_campaing/cleaning4.jpg", alt: "Cleaning Campaing Cleaning4" },
    { src: "/assets/cleaning_campaing/cleaning6.jpg", alt: "Cleaning Campaing Cleaning6" },
    { src: "/assets/playing_in_cleaned_ground/playing3.jpg", alt: "Playing In Cleaned Ground Playing3" },
    { src: "/assets/playing_in_cleaned_ground/playing4.jpg", alt: "Playing In Cleaned Ground Playing4" },
    { src: "/assets/playing_in_cleaned_ground/playing5.jpg", alt: "Playing In Cleaned Ground Playing5" },
    { src: "/assets/playing_in_cleaned_ground/playing2.jpg", alt: "Playing In Cleaned Ground Playing2" },
    { src: "/assets/playing_in_cleaned_ground/playing1.jpg", alt: "Playing In Cleaned Ground Playing1" },
  ];

  const getTranslatedAlt = (alt: string) => {
    if (alt.startsWith("First Meeting")) return `${dict.gallery.categories.first_meeting} ${alt.replace("First Meeting", "")}`;
    if (alt.startsWith("Second Meeting")) return `${dict.gallery.categories.second_meeting} ${alt.replace("Second Meeting", "")}`;
    if (alt.startsWith("Cleaning Campaing")) return `${dict.gallery.categories.cleaning_campaing} ${alt.replace("Cleaning Campaing", "")}`;
    if (alt.startsWith("Playing In Cleaned Ground")) return `${dict.gallery.categories.playing} ${alt.replace("Playing In Cleaned Ground", "")}`;
    return alt;
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={dict.gallery.page_title}
          subtitle={dict.gallery.page_subtitle}
          centered
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group bg-gray-100"
            >
              <Image
                src={photo.src}
                alt={getTranslatedAlt(photo.alt)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <p className="text-white text-xs sm:text-sm font-medium line-clamp-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {getTranslatedAlt(photo.alt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

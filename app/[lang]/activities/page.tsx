import SectionTitle from "@/components/SectionTitle";
import ActivityCard from "@/components/ActivityCard";
import Image from "next/image";
import { getDictionary } from "@/getDictionary";
import { getImagePath } from "@/utils/imagePath";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as "en" | "si");
    return {
        title: dict.activities.title,
        description: dict.activities.description,
    };
}

export default async function ActivitiesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as "en" | "si");

    const meetings = [
        {
            title: dict.activities.meetings.items[0].title,
            date: dict.activities.meetings.items[0].date,
            description: dict.activities.meetings.items[0].description,
            imageSrc: "/assets/first_meeting/meeting1_2.jpg",
            imageAlt: dict.activities.meetings.items[0].title,
        },
        {
            title: dict.activities.meetings.items[1].title,
            date: dict.activities.meetings.items[1].date,
            description: dict.activities.meetings.items[1].description,
            imageSrc: "/assets/second_meeting/meeting2_1.jpg",
            imageAlt: dict.activities.meetings.items[1].title,
        },
        {
            title: dict.activities.meetings.items[2].title,
            date: dict.activities.meetings.items[2].date,
            description: dict.activities.meetings.items[2].description,
            imageSrc: "/assets/second_meeting/meeting2_2.jpg",
            imageAlt: dict.activities.meetings.items[2].title,
        },
    ];

    return (
        <div className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Meetings Section */}
                <section className="mb-24">
                    <SectionTitle
                        title={dict.activities.meetings.section_title}
                        subtitle={dict.activities.meetings.section_subtitle}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {meetings.map((meeting, index) => (
                            <ActivityCard key={index} {...meeting} />
                        ))}
                    </div>
                </section>

                {/* Community Projects Section */}
                <section>
                    <div className="flex items-center gap-4 mb-2">
                        <span className="w-12 h-1 bg-secondary rounded-full hidden sm:block"></span>
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">{dict.activities.projects.badge}</span>
                    </div>
                    <SectionTitle
                        title={dict.activities.projects.section_title}
                        subtitle={dict.activities.projects.section_subtitle}
                    />

                    <div className="mt-12 bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">{dict.activities.projects.featured.title}</h3>

                                <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed mb-8">
                                    <p>
                                        {dict.activities.projects.featured.p1}
                                    </p>
                                    <p>
                                        {dict.activities.projects.featured.p2}
                                    </p>
                                </div>

                                <div className="bg-primary-light/20 p-6 rounded-2xl border border-primary-light border-dashed">
                                    <h4 className="text-primary font-bold text-lg mb-2">{dict.activities.projects.featured.impact_title}</h4>
                                    <p className="text-gray-700 italic">
                                        {dict.activities.projects.featured.impact_quote}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 h-full">
                                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-1/2 w-full">
                                    <Image
                                        src={getImagePath("/assets/cleaning_campaing/before_cleaning.jpeg")}
                                        alt="Court before cleaning"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
                                        {dict.activities.projects.before}
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-1/2 w-full">
                                    <Image
                                        src={getImagePath("/assets/cleaning_campaing/after_cleaning.jpeg")}
                                        alt="Court after cleaning"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
                                        {dict.activities.projects.after}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

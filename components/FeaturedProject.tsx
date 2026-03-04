import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

export default function FeaturedProject({ dict, lang }: { dict: any, lang: string }) {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title={dict.home.project.title}
                    subtitle={dict.home.project.subtitle}
                    centered
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="space-y-6 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-gray-900">{dict.home.project.before} & {dict.home.project.after}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {dict.home.project.description}
                        </p>
                        <div className="pt-4">
                            <Button href={`/${lang}/activities`} variant="outline">{dict.home.project.cta}</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 md:order-2">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group">
                            <Image
                                src="/assets/cleaning_campaing/before_cleaning.jpeg"
                                alt="Volleyball court before cleaning"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                    {dict.home.project.before}
                                </span>
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm group sm:mt-8">
                            <Image
                                src="/assets/cleaning_campaing/after_cleaning.jpeg"
                                alt="Volleyball court after cleaning"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                                <span className="text-white font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    {dict.home.project.after}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

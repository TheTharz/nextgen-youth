import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { getDictionary } from "@/getDictionary";
import { getImagePath } from "@/utils/imagePath";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as "en" | "si");
    return {
        title: `${dict.about.title} | NextGen Youth`,
        description: dict.about.subtitle,
    };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as "en" | "si");

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title={dict.about.title}
                    subtitle={dict.about.subtitle}
                    centered
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={getImagePath("/assets/first_meeting/meeting1_1.jpg")}
                            alt="NextGen Youth founders meeting"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute inset-0 border-[6px] border-white/10 rounded-3xl mix-blend-overlay pointer-events-none"></div>
                    </div>

                    <div className="space-y-10">
                        <section>
                            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                <span className="w-8 h-1 bg-secondary rounded-full"></span>
                                {dict.about.mission.title}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed font-light">
                                {dict.about.mission.text}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                                <span className="w-8 h-1 bg-secondary rounded-full"></span>
                                {dict.about.vision.title}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed font-light">
                                {dict.about.vision.text}
                            </p>
                        </section>

                        <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{dict.about.why_formed.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {dict.about.why_formed.text}
                            </p>
                        </section>
                    </div>
                </div>

                <div className="mt-20 sm:mt-32 max-w-4xl mx-auto text-center bg-white">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">{dict.about.story.title}</h2>
                    <div className="prose prose-lg prose-blue mx-auto text-gray-600 text-left md:text-center space-y-6 text-lg md:text-xl font-light leading-relaxed">
                        <p>
                            {dict.about.story.p1}
                        </p>
                        <p>
                            {dict.about.story.p2_1} <span className="text-primary font-semibold italic">{dict.about.story.p2_motto}</span> {dict.about.story.p2_2}
                        </p>
                        <p className="font-medium text-gray-900 mt-8 text-xl">
                            {dict.about.story.p3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

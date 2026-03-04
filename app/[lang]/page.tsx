import Image from "next/image";
import Button from "@/components/Button";
import StatsSection from "@/components/StatsSection";
import FeaturedProject from "@/components/FeaturedProject";
import HomeGallery from "@/components/HomeGallery";
import { getDictionary } from "@/getDictionary";
import { getImagePath } from "@/utils/imagePath";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "si");

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/assets/second_meeting/meeting2_1.jpg")}
            alt="NextGen Youth Community"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in-up backdrop-blur-sm">
            {dict.home.welcome}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md">
            {dict.home.title_1} <span className="text-secondary">{dict.home.title_2}</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-light mb-8 text-gray-200 tracking-wide italic">
            "{dict.home.tagline}"
          </p>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            {dict.home.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={`/${lang}/contact`} variant="primary" className="w-full sm:w-auto shadow-[#f07814]/30 text-lg px-8 py-3.5">
              {dict.home.join_us}
            </Button>
            <Button href={`/${lang}/activities`} variant="outline" className="w-full sm:w-auto !bg-transparent !text-white !border-white hover:!bg-white/20 hover:!border-transparent backdrop-blur-sm transition-all shadow-lg text-lg px-8 py-3.5">
              {dict.home.view_activities}
            </Button>
          </div>
        </div>
      </section>

      <StatsSection dict={dict} />
      <HomeGallery dict={dict} lang={lang} />
      <FeaturedProject dict={dict} lang={lang} />
    </>
  );
}

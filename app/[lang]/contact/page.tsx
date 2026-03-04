import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/getDictionary";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as "en" | "si");
    return {
        title: dict.contact.title,
        description: dict.contact.description,
    };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as "en" | "si");

    return (
        <div className="py-16 bg-gray-50 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <SectionTitle
                    title={dict.contact.page_title}
                    subtitle={dict.contact.page_subtitle}
                    centered
                />

                <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Contact Information */}
                    <div className="space-y-14">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{dict.contact.details_title}</h3>

                            {/* Location */}
                            <div className="flex items-start gap-5 text-gray-600 mb-8">
                                <div className="p-4 bg-primary-light/40 rounded-full text-primary shadow-sm border border-primary/10">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div className="pt-1 text-lg leading-relaxed font-light">
                                    <p className="font-semibold text-gray-900 text-xl mb-1">{dict.contact.hub_name}</p>
                                    <p>{dict.contact.address_1}</p>
                                    <p>{dict.contact.address_2}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-5 text-gray-600 mb-8">
                                <div className="p-4 bg-primary-light/40 rounded-full text-primary shadow-sm border border-primary/10">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div className="text-lg leading-relaxed font-light">
                                    <p className="font-semibold text-gray-900 text-xl mb-1">{dict.contact.phone}</p>
                                    <a href="tel:+9470681223" className="hover:text-primary transition-colors">+9470681223</a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-5 text-gray-600">
                                <div className="p-4 bg-primary-light/40 rounded-full text-primary shadow-sm border border-primary/10">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div className="text-lg leading-relaxed font-light">
                                    <p className="font-semibold text-gray-900 text-xl mb-1">{dict.contact.email}</p>
                                    <a href="mailto:youthnextgen76@gmail.com" className="hover:text-primary transition-colors">youthnextgen76@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{dict.contact.connect_title}</h3>
                            <a
                                href="https://web.facebook.com/profile.php?id=61586561072882"
                                className="inline-flex items-center gap-5 text-gray-600 hover:text-primary transition-colors group"
                                aria-label="Visit our Facebook page"
                            >
                                <div className="p-4 bg-white rounded-full group-hover:bg-primary group-hover:text-white text-gray-400 shadow-sm border border-gray-100 transition-all duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </div>
                                <span className="font-medium text-xl">{dict.contact.facebook}</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-gray-100">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 tracking-tight">{dict.contact.form.title}</h3>
                        <ContactForm dict={dict.contact.form} />
                    </div>

                </div>
            </div>
        </div>
    );
}

import Link from "next/link";

export default function Footer({ dict, lang }: { dict: any, lang: string }) {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-xl font-bold text-primary">
                            {dict.navigation.logo_text_1}<span className="text-secondary">{dict.navigation.logo_text_2}</span>
                        </span>
                        <p className="mt-2 text-sm text-gray-500 max-w-sm">
                            {dict.footer.description}
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <Link href={`/${lang}`} className="text-sm text-gray-500 hover:text-primary">{dict.navigation.home}</Link>
                        <Link href={`/${lang}/about`} className="text-sm text-gray-500 hover:text-primary">{dict.navigation.about}</Link>
                        <Link href={`/${lang}/activities`} className="text-sm text-gray-500 hover:text-primary">{dict.navigation.activities}</Link>
                        <Link href={`/${lang}/gallery`} className="text-sm text-gray-500 hover:text-primary">{dict.navigation.gallery}</Link>
                        <Link href={`/${lang}/contact`} className="text-sm text-gray-500 hover:text-primary">{dict.navigation.contact}</Link>
                    </nav>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {dict.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}

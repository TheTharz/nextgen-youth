import 'server-only';

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    si: () => import('./dictionaries/si.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'si') => {
    if (!dictionaries[locale]) {
        return dictionaries.en();
    }
    return dictionaries[locale]();
};

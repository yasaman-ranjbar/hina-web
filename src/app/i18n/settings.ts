export const fallbackLng = 'en'
export const languages = [fallbackLng, 'fa']
export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}
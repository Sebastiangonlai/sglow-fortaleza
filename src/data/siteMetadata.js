const siteMetadata = {
    title: 'Academia Fortaleza',
    author: 'Academia Fortaleza',
    headerTitle: 'Academia Fortaleza',
    description: 'Licencia de Conducir - Clases de Manejo en Montevideo - Libreta de conducir - Academia de Choferes - Cursos de Conducción en Montevideo',
    language: 'es-ES',
    theme: 'dark', // system, dark or light
    siteUrl: 'https://academiafortaleza.com.uy',
    siteRepo: 'https://academiafortaleza.com.uy',
    siteLogo: '/static/favicons/logo.svg',
    image: '/static/favicons/logo.svg',
    socialBanner: '/static/favicons/favicon.svg',
    email: import.meta.env.VITE_EMAILINFO,
    whatsapp: import.meta.env.VITE_API_WHATSAPP,
    instagram: import.meta.env.VITE_INSTAGRAM,
    facebook: import.meta.env.VITE_FACEBOOK,
    twitter: import.meta.env.VITE_FACEBOOK,
    galeria: import.meta.env.VITE_INSTAGRAM,
    locale: 'es-ES',
    analytics: {
        googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS,
    },
}

export default siteMetadata
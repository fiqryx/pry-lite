import type { Metadata } from '@/components/metadata'

const baseUrl =
    import.meta.env.MODE === 'development' || !import.meta.env.VITE_SITE_URL
        ? new URL('http://localhost:3001')
        : new URL(import.meta.env.VITE_SITE_URL);

export function createMetadata(override: Metadata) {
    return {
        ...override,
        openGraph: {
            title: override.title ?? import.meta.env.VITE_APP_NAME,
            description: override.description ?? undefined,
            url: baseUrl,
            images: '/thumbnail.png',
            siteName: 'Pry',
            ...override.openGraph,
        },
        twitter: {
            card: 'summary_large_image',
            creator: '@fiqryx',
            title: override.title ?? undefined,
            description: override.description ?? undefined,
            images: '/thumbnail.png',
            ...override.twitter,
        },
    };
}
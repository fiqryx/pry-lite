import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface MetadataProps {
    title?: string;
    description?: string;
    openGraph?: {
        title?: string;
        description?: string;
        url?: string | URL;
        images?: string;
        siteName?: string;
    };
    twitter?: {
        card?: string;
        creator?: string;
        title?: string;
        description?: string;
        images?: string;
    };
}

const baseUrl =
    import.meta.env.MODE === 'development' || !import.meta.env.VITE_SITE_URL
        ? new URL('http://localhost:3001')
        : new URL(import.meta.env.VITE_SITE_URL);

const Metadata: React.FC<MetadataProps> = (props) => {
    const {
        title = import.meta.env.VITE_APP_NAME,
        description = '',
        openGraph,
        twitter
    } = props;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* OpenGraph */}
            <meta property="og:title" content={openGraph?.title ?? title} />
            <meta property="og:description" content={openGraph?.description ?? description} />
            <meta property="og:url" content={openGraph?.url?.toString() ?? baseUrl.toString()} />
            <meta property="og:image" content={openGraph?.images ?? '/thumbnail.png'} />
            <meta property="og:site_name" content={openGraph?.siteName ?? 'Pry'} />
            {/* Twitter */}
            <meta name="twitter:card" content={twitter?.card ?? 'summary_large_image'} />
            <meta name="twitter:creator" content={twitter?.creator} />
            <meta name="twitter:title" content={twitter?.title ?? title} />
            <meta name="twitter:description" content={twitter?.description ?? description} />
            <meta name="twitter:image" content={twitter?.images ?? '/thumbnail.png'} />
        </Helmet>
    );
};

export {
    Metadata
}

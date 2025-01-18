import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface Metadata {
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

const Metadata: React.FC<Metadata> = ({ title, description, openGraph, twitter }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* OpenGraph */}
        <meta property="og:title" content={openGraph?.title} />
        <meta property="og:description" content={openGraph?.description} />
        <meta property="og:url" content={openGraph?.url?.toString()} />
        <meta property="og:image" content={openGraph?.images} />
        <meta property="og:site_name" content={openGraph?.siteName} />
        {/* Twitter */}
        <meta name="twitter:card" content={twitter?.card} />
        <meta name="twitter:creator" content={twitter?.creator} />
        <meta name="twitter:title" content={twitter?.title} />
        <meta name="twitter:description" content={twitter?.description} />
        <meta name="twitter:image" content={twitter?.images} />
    </Helmet>
)

export {
    Metadata
}

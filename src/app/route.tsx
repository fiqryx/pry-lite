import React from 'react'
import { Metadata } from '@/components/metadata.tsx';

import {
    getRoutes,
    RouteProps
} from '@/lib/route.ts'
import {
    Routes,
    Route as RouteDOM,
} from "react-router-dom";

export function Route() {
    const [routes, setRoutes] = React.useState<RouteProps[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const loadRoutes = async () => {
            setRoutes(
                await getRoutes()
            );
            setLoading(false);
        };

        loadRoutes();
    }, []);

    if (loading) {
        return null
    }

    return (
        <Routes>
            {routes.map(({ page: Comp, metadata, ...props }, idx) => Comp && (
                <RouteDOM
                    key={idx}
                    {...props}
                    element={(<>
                        <Metadata {...metadata} />
                        <Comp />
                    </>)}
                />
            ))}
        </Routes>
    );
}
import React from 'react'
import { Middleware } from './middleware.tsx'

import {
    getRoutes,
    RouteProps
} from '@/lib/route.ts'
import {
    Routes,
    BrowserRouter,
    Route as RouteDOM,
} from "react-router-dom";

export function Route() {
    const [routes, setRoutes] = React.useState<RouteProps[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const loadRoutes = async () => {
            const loadedRoutes = await getRoutes();
            setRoutes(loadedRoutes);
            setLoading(false);
        };

        loadRoutes();
    }, []);

    if (loading) {
        return null
    }

    return (
        <BrowserRouter>
            <Middleware>
                <Routes>
                    {routes.map(({ page: Comp, ...props }, idx) =>
                        Comp ? <RouteDOM key={idx} {...props} element={<Comp />} /> : null
                    )}
                </Routes>
            </Middleware>
        </BrowserRouter>
    );
}
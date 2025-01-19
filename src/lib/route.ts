import NotFound from "@/app/not-found";
import { Metadata } from "@/components/metadata"
import { RouteProps as RoutePropsDOM } from "react-router-dom";

export type RouteProps<T = any> = RoutePropsDOM & {
    params?: T
    metadata?: Metadata
    page?: (params?: T) => JSX.Element
}

type Module<T = any> = {
    default: () => JSX.Element
    metadata?: Metadata
    generateMetadata?: (params?: T) => Promise<Metadata>
}

const pages = import.meta.glob("@/app/**/page.tsx");

function _getParams(path: string): Record<string, string> {
    const paramRegex = /\[([^\]]+)\]/g;
    const params: Record<string, string> = {};
    const segments = window.location.pathname.split("/").filter(Boolean);

    let match;
    let pathSegments = path.split("/").filter(Boolean);

    while ((match = paramRegex.exec(path)) !== null) {
        const paramName = match[1];
        const paramIndex = pathSegments.findIndex(
            segment => segment === `[${paramName}]`
        );

        if (paramIndex !== -1) {
            params[paramName] = segments[paramIndex];
        }
    }

    return params;
}

export const getRoutes = async (): Promise<RouteProps[]> => {
    const routes = await Promise.all(
        Object.entries(pages).map(async ([path, module]) => {
            const { default: element, generateMetadata, metadata } = (
                (await module()) as Module
            );

            if (!element) return {} as RouteProps;

            const routePath = path.replace("/src/app", "")
                .replace(/\/\([^)]*\)/g, "")
                .replace("/page.tsx", "") || "/";

            const params = _getParams(routePath)

            return {
                params,
                page: element,
                path: routePath.replace(/\[([^\]]+)\]/g, ":$1"),
                metadata: metadata || (
                    generateMetadata ? await generateMetadata({ params }) : undefined
                ),
            };
        })
    );
    routes.push({ path: "*", page: NotFound });

    return routes;
}






import NotFound from "@/app/not-found";
import { Metadata } from "@/components/metadata"
import { RouteProps as RoutePropsDOM } from "react-router-dom";

export type RouteProps = RoutePropsDOM & {
    page?: () => JSX.Element
    metadata?: Metadata
}

type Module = {
    default: () => JSX.Element
    metadata: Metadata
}

const pages = import.meta.glob("@/app/**/page.tsx");

export const getRoutes = async (): Promise<RouteProps[]> => {
    const routes = await Promise.all(
        Object.entries(pages).map(async ([path, module]) => {
            const { default: element, metadata } = (
                (await module()) as Module
            );

            if (!element) return {} as RouteProps;

            const routePath = path
                .replace("/src/app", "")
                .replace(/\/\([^)]*\)/g, "")
                .replace("/page.tsx", "")
                .replace(/\[([^\]]+)\]/g, ":$1") || "/";

            return {
                metadata,
                path: routePath === "" ? "/" : routePath,
                page: element,
            };
        })
    );
    routes.push({ path: "*", page: NotFound });

    return routes;
};






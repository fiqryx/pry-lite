import NotFound from "@/app/not-found";
import { RouteProps as RoutePropsDOM } from "react-router-dom";

export type RouteProps = RoutePropsDOM & {
    page?: () => JSX.Element
}

const pages = import.meta.glob("@/app/**/page.tsx");

export const getRoutes = async (): Promise<RouteProps[]> => {
    const routes = await Promise.all(
        Object.entries(pages).map(async ([path, module]) => {
            const element = (
                (await module()) as { default: () => JSX.Element }
            ).default;

            if (!element) return {} as RouteProps;

            const routePath = path
                .replace("/src/app", "")
                .replace(/\/\([^)]*\)/g, "")
                .replace("/page.tsx", "")
                .replace(/\[([^\]]+)\]/g, ":$1") || "/";

            return {
                path: routePath === "" ? "/" : routePath,
                page: element,
            };
        })
    );

    // Add the NotFound route
    routes.push({ path: "*", page: NotFound });

    return routes;
};





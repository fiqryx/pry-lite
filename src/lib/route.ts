import NotFound from "@/app/not-found";
import { RouteProps } from "react-router-dom";

type Props = RouteProps & {
    page?: () => JSX.Element
}

const pages = import.meta.glob("../app/**/page.tsx", { eager: true })

export const routes: Props[] = Object.entries(pages).map(([path, module]) => {
    const element = (module as { default: () => JSX.Element }).default

    if (!element) {
        return {}
    }

    const routePath = path
        .replace("../app", "")
        .replace(/\/\([^)]*\)/g, "")
        .replace("/page.tsx", "")
        .replace(/\[([^\]]+)\]/g, ":$1") || "/";

    return {
        path: routePath === "" ? "/" : routePath,
        page: element,
    }
})
routes.push({ path: "*", page: NotFound })




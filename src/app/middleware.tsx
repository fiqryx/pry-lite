import React from "react";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";

const publicRoutes = [
    '/',
    '/sign-in',
    '/sign-up',
    '/reset-password'
]

export function Middleware({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const location = useLocation();
    const token = Cookies.get("session.token");
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const pathname = location.pathname;

        if (pathname === '/' && !token) {
            navigate("/sign-in");
        } else if (!token && !publicRoutes.includes(pathname)) {
            navigate("/sign-in");
        } else if (token && publicRoutes.includes(pathname)) {
            navigate("/dashboard");
        }

        setLoading(false);
    }, [location.pathname, navigate, token]);

    if (loading) {
        return <>Loading...</>;
    }

    return children;
}
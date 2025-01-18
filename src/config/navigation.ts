import {
    AudioWaveform,
    CircleXIcon,
    GalleryVerticalEnd,
    PieChartIcon,
    PyramidIcon,
    Settings2Icon,
    SettingsIcon,
    UserIcon,
    Users2Icon,
} from "lucide-react"

export const navigation = {
    teams: [
        {
            name: "Pry",
            logo: PyramidIcon,
            plan: "Lite",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Pro",
        },
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
    ],
    navMain: [
        {
            title: "Overview",
            url: "/dashboard",
            icon: PieChartIcon,
        },
        {
            title: "Customers",
            url: "/customer",
            icon: Users2Icon,
        },
        {
            title: "Integrations",
            url: "/integration",
            icon: Settings2Icon,
        },
        {
            title: "Settings",
            url: "/settings",
            icon: SettingsIcon,
        },
        {
            title: "Account",
            url: "/account",
            icon: UserIcon,
        },
        {
            title: "Error",
            url: "/errors/not-found",
            icon: CircleXIcon,
        },
    ],
}
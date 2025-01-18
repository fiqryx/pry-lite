import { SettingsPassword } from "./components/settings-password";
import { SettingsNotification } from "./components/settings-notification";

import {
    Breadcrumb,
    Dashboard
} from "@/components/app-dashboard"


const breadcrumb: Breadcrumb[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings' },
]

export default function Page() {
    return (
        <Dashboard
            breadcrumb={breadcrumb}
            className="container mx-auto sm:pt-16"
            metadata={{ title: 'Settings' }}
        >
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl sm:text-4xl font-semibold">
                    Settings
                </h1>
                <SettingsNotification />
                <SettingsPassword />
            </div>
        </Dashboard>
    )
}
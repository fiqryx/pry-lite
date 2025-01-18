import { createMetadata } from "@/lib/metadata"

import { SettingsPassword } from "./components/settings-password";
import { SettingsNotification } from "./components/settings-notification";

import {
    Breadcrumb,
    Dashboard
} from "@/components/app-dashboard"

export const metadata = createMetadata({ title: 'Settings' })

const breadcrumb: Breadcrumb[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings' },
]

export default function Page() {
    return (
        <Dashboard breadcrumb={breadcrumb} className="container mx-auto sm:pt-16">
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
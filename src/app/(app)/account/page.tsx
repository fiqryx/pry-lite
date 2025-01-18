import { AccountInfo } from "./components/account-info";
import { AccountForm } from "./components/account-form";

import {
    Breadcrumb,
    Dashboard
} from "@/components/app-dashboard"


const breadcrumb: Breadcrumb[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Account' },
]

export default function Page() {
    return (
        <Dashboard
            breadcrumb={breadcrumb}
            className="container mx-auto sm:pt-16"
            metadata={{ title: 'Account' }}
        >
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl sm:text-4xl font-semibold">
                    Account
                </h1>
                <div className="grid lg:grid-cols-3 gap-4">
                    <AccountInfo />
                    <AccountForm className="lg:col-span-2" />
                </div>
            </div>
        </Dashboard>
    )
}
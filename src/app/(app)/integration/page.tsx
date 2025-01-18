import { Button } from "@/components/ui/button";
import { IntergrationCards } from "./components/integration-cards";
import { IntegrationPagination } from "./components/integration-pagination";

import {
    Input,
    InputIcon
} from "@/components/ui/input";
import {
    Dashboard,
    Breadcrumb,
} from "@/components/app-dashboard"
import {
    SearchIcon,
    HardDriveUploadIcon,
    HardDriveDownloadIcon,
    PlusIcon,
} from "lucide-react";


const breadcrumb: Breadcrumb[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Integrations' },
]

export default function Page() {
    return (
        <Dashboard
            breadcrumb={breadcrumb}
            className="container mx-auto sm:pt-16"
            metadata={{ title: 'Integrations' }}
        >
            <div className="flex flex-col gap-8">
                <div className="grid gap-2">
                    <div className="flex flex-wrap justify-between gap-4">
                        <h1 className="text-2xl sm:text-4xl font-semibold">
                            Integrations
                        </h1>
                        <Button className="px-6 sm:h-10 sm:px-6">
                            <PlusIcon />
                            Add
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button variant="ghost">
                            <HardDriveUploadIcon />
                            Import
                        </Button>
                        <Button variant="ghost">
                            <HardDriveDownloadIcon />
                            Export
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <Input
                        type="search"
                        className="max-w-sm h-10"
                        placeholder="Search integration"
                    >
                        <InputIcon position="left">
                            <SearchIcon className="size-5" />
                        </InputIcon>
                    </Input>
                    <IntergrationCards className="auto-rows-min lg:grid-cols-3 gap-5" />
                    <IntegrationPagination />
                </div>
            </div>
        </Dashboard>
    )
}
import { createMetadata } from "@/lib/metadata"

import { customers } from "@/types/customer"
import { Button } from "@/components/ui/button"
import { columns } from "./components/columns"
import { Datatable } from "@/components/ui/data-table"

import {
    Input,
    InputIcon
} from "@/components/ui/input"
import {
    Dashboard,
    Breadcrumb
} from "@/components/app-dashboard"
import {
    SearchIcon,
    HardDriveDownloadIcon,
    HardDriveUploadIcon,
    PlusIcon,
} from "lucide-react"

export const metadata = createMetadata({ title: 'Customers' })

const breadcrumb: Breadcrumb[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Customers' },
]

export default function Page() {
    return (
        <Dashboard breadcrumb={breadcrumb} className="container mx-auto sm:pt-16">
            <div className="flex flex-col gap-8">
                <div className="grid gap-2">
                    <div className="flex flex-wrap justify-between gap-4">
                        <h1 className="text-2xl sm:text-4xl font-semibold">
                            Customers
                        </h1>
                        <Button>
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
                <div className="flex flex-col gap-2">
                    <Input
                        type="search"
                        className="max-w-fit sm:max-w-sm h-10"
                        placeholder="Search integration"
                    >
                        <InputIcon position="left">
                            <SearchIcon className="size-5" />
                        </InputIcon>
                    </Input>
                    <Datatable
                        pagination
                        columns={columns}
                        data={customers}
                        paginationOptions={{
                            pageIndex: 0,
                            pageSize: 5,
                            pageSizeOptions: [5, 10, 25]
                        }}
                    />
                </div>
            </div>
        </Dashboard>
    )
}
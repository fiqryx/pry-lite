import React from "react"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { ExternalLink } from "./external-link"
import { AuthProvider } from "./providers/auth-provider"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { ToggleTheme } from "@/components/toggle-theme"
import { SearchCommand } from "./search-command"
import { ToggleNotification } from "./toggle-notification"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export type Breadcrumb = {
    label: string
    href?: string
}

export type DashboardProps = {
    children?: React.ReactNode
    className?: string
    breadcrumb?: Breadcrumb[]
    breadcrumbSparator?: React.ReactNode
}

export function Dashboard({
    children,
    className,
    breadcrumbSparator,
    breadcrumb,
}: DashboardProps) {
    return (
        <AuthProvider>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="sticky top-0 flex h-16 shrink-0 justify-between items-center gap-2 bg-background z-50 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            {breadcrumb?.length && (
                                <Separator orientation="vertical" className="mr-2 h-4" />
                            )}
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {breadcrumb?.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            <BreadcrumbItem className="hidden md:block">
                                                <BreadcrumbLink href={item.href}>
                                                    {item.label}
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            {idx < breadcrumb.length - 1 && (
                                                <BreadcrumbSeparator className='hidden md:block'>
                                                    {breadcrumbSparator}
                                                </BreadcrumbSeparator>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <div className="flex items-center gap-2 px-4">
                            <SearchCommand className="hidden sm:flex" />
                            <ToggleNotification />
                            <ToggleTheme />
                            <ExternalLink
                                target="_blank"
                                title="Github"
                                href={import.meta.env.VITE_REPO_URL ?? "#"}
                            >
                                <Icons.gitHub />
                            </ExternalLink>
                        </div>
                    </header>
                    <div className={cn('flex flex-1 flex-col gap-4 p-4', className)}>
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </AuthProvider>
    )
}

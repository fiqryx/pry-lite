import React from "react"
import { cn } from "@/lib/utils"

import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import {
    ClockIcon,
    HardDriveDownloadIcon
} from "lucide-react"

const providers = [
    {
        label: 'Dropbox',
        logo: '/assets/logo-dropbox.png',
        description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
        install: 359,
        lastUpdated: 'Apr 8, 2024'
    },
    {
        label: 'Medium Corporation',
        logo: '/assets/logo-medium.png',
        description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
        install: 245,
        lastUpdated: 'Mar 28, 2024'
    },
    {
        label: 'Slack',
        logo: '/assets/logo-slack.png',
        description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
        install: 321,
        lastUpdated: 'Feb 12, 2024'
    },
    {
        label: 'Lyft',
        logo: '/assets/logo-lyft.png',
        description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
        install: 120,
        lastUpdated: 'Feb 10, 2024'
    },
    {
        label: 'GitHub',
        logo: '/assets/logo-github.png',
        description: 'GitHub is a web-based hosting service for version control of code using Git.',
        install: 426,
        lastUpdated: 'Jan 26, 2024'
    },
    {
        label: 'Squarespace',
        logo: '/assets/logo-squarespace.png',
        description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
        install: 225,
        lastUpdated: 'Jan 12, 2024'
    },
]

export function IntergrationCards({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div {...props} className={cn('grid gap-4', className)}>
            {providers.map((item, idx) => (
                <Card key={idx}>
                    <CardContent className="flex flex-col justify-center items-center gap-4 p-6">
                        <div className="relative size-10">
                            <img alt={item.label} src={item.logo} className="object-cover" />
                        </div>
                        <h3 className="text-xl">{item.label}</h3>
                        <span className="text-center text-muted-foreground">
                            {item.description}
                        </span>
                    </CardContent>
                    <CardFooter className="justify-between items-start border-t p-4">
                        <span className="inline-flex items-center justify-center text-sm text-muted-foreground gap-1">
                            <ClockIcon className="size-4" />
                            Updated {item.lastUpdated}
                        </span>
                        <span className="inline-flex items-center justify-center text-sm text-muted-foreground gap-2">
                            <HardDriveDownloadIcon className="size-4" />
                            {item.install} Installs
                        </span>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
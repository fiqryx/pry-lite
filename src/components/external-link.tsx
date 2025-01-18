import React from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function ExternalLink({
    className,
    children,
    title,
    ...props
}: React.ComponentProps<'a'>) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a
                        {...props}
                        className={cn(
                            buttonVariants({ size: 'icon', variant: 'ghost' }),
                            'h-7 w-7 p-2',
                            className
                        )}
                    >
                        {children}
                    </a>
                </TooltipTrigger>
                {title && (
                    <TooltipContent side="bottom">
                        {title}
                    </TooltipContent>
                )}
            </Tooltip>
        </TooltipProvider>
    )
}
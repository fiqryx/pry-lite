import React from "react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "lucide-react"

type Props = {
    pageSize?: number
}

export function IntegrationPagination({
    className,
    pageSize = 3,
    ...props
}: React.ComponentProps<'div'> & Props) {
    const [currentPage, setCurrentPage] = React.useState(1)

    return (
        <div {...props} className={cn('mx-auto flex w-full justify-center', className)}>
            <div className="flex flex-row items-center gap-2">
                <Button
                    variant="ghost"
                    className="rounded-full size-8 p-0"
                    disabled={currentPage === 1}
                    onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1)
                        }
                    }}
                >
                    <ChevronLeftIcon className="size-4" />
                </Button>
                {Array.from({ length: pageSize }).map((_, idx) => (
                    <Button
                        key={idx}
                        variant="ghost"
                        onClick={() => setCurrentPage(idx + 1)}
                        className={cn(
                            'rounded-full size-8 p-0',
                            currentPage === idx + 1 && 'bg-accent text-accent-foreground'
                        )}
                    >
                        {idx + 1}
                    </Button>
                ))}
                <Button
                    variant="ghost"
                    className="rounded-full size-8 p-0"
                    disabled={currentPage === pageSize}
                    onClick={() => {
                        if (currentPage < pageSize) {
                            setCurrentPage(currentPage + 1)
                        }
                    }}
                >
                    <ChevronRightIcon className="size-4" />
                </Button>
            </div>
        </div>
    )
}

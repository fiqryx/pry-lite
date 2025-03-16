import React from "react"
import { cn } from "@/lib/utils"

import {
    Card,
    CardContent
} from "@/components/ui/card"
import {
    ArrowDownIcon,
    ArrowUpIcon,
    DollarSignIcon,
    ListIcon,
    ReceiptIcon,
    UsersIcon
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const widgets = [
    {
        label: 'Budget',
        value: "$24k",
        icon: DollarSignIcon,
        color: "var(--primary)",
        data: {
            type: 'indicator',
            value: 12
        }
    },
    {
        label: 'Total customers',
        value: "16k",
        icon: UsersIcon,
        color: "var(--success)",
        data: {
            type: 'indicator',
            value: -16
        }
    },
    {
        label: 'Task progress',
        value: "75.5%",
        icon: ListIcon,
        color: "var(--warning)",
        data: {
            type: 'progress',
            value: 75.5
        }
    },
    {
        label: 'Total profit',
        value: "$15k",
        icon: ReceiptIcon,
        color: "var(--primary)"
    },
]

export function DashboardWidgets({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div {...props} className={cn('grid auto-rows-min', className)}>
            {widgets.map((item, idx) => (
                <Card key={idx}>
                    <CardContent className="grid p-6 gap-6">
                        <div className="flex justify-between gap-4 ">
                            <div className="flex flex-col gap-4">
                                <span className="text-sm text-muted-foreground uppercase tracking-tight">
                                    {item.label}
                                </span>
                                <h4 className="text-4xl font-semibold tracking-tight">
                                    {item.value}
                                </h4>
                            </div>
                            <div
                                style={{ background: item.color }}
                                className="flex justify-center items-center rounded-full size-16"
                            >
                                <item.icon className="text-primary-foreground" />
                            </div>
                        </div>
                        {item.data && <WidgetMetric {...item.data} />}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

function WidgetMetric({
    type,
    value
}: {
    type: string
    value: number
}) {
    if (type === 'indicator') {
        return (
            <div className="flex flex-wrap items-center gap-3">
                {value >= 0 ? (
                    <span className="flex items-center text-sm text-success">
                        <ArrowUpIcon className="size-4" />
                        {value}
                    </span>
                ) : (
                    <span className="flex items-center text-sm text-destructive">
                        <ArrowDownIcon className="size-4" />
                        {value * -1}
                    </span>
                )}
                <span className="text-xs text-muted-foreground">
                    Since last month
                </span>
            </div>
        )
    } else if (type === 'progress') {
        return <Progress value={value} className="h-1.5" />
    }
}
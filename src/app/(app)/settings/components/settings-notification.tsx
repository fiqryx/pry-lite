import React from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription
} from "@/components/ui/card"


export function SettingsNotification({
    ...props
}: React.ComponentProps<typeof Card>) {
    return (
        <Card {...props}>
            <CardHeader>
                <CardTitle className="text-lg tracking-normal">
                    Notifications
                </CardTitle>
                <CardDescription className="leading-none">
                    Manage the notifications
                </CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 border-y p-6 sm:px-8 gap-4">
                <div className="grid gap-4">
                    <Label className="text-lg">Email</Label>
                    <div className="flex items-center gap-2">
                        <Checkbox id="productEmail" className="size-5" />
                        <Label htmlFor="productEmail" className="text-md">
                            Product updates
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="securityEmail" className="size-5" />
                        <Label htmlFor="securityEmail" className="text-md">
                            Security updates
                        </Label>
                    </div>
                </div>
                <div className="grid gap-4">
                    <Label className="text-lg">Phone</Label>
                    <div className="flex items-center gap-2">
                        <Checkbox id="emailPhone" className="size-5" />
                        <Label htmlFor="emailPhone" className="text-md">
                            Email
                        </Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="securityPhone" className="size-5" />
                        <Label htmlFor="securityPhone" className="text-md">
                            Security updates
                        </Label>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-end p-2">
                <Button>
                    Save changes
                </Button>
            </CardFooter>
        </Card>
    )
}
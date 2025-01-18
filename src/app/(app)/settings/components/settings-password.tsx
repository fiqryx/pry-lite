import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

export function SettingsPassword({
    ...props
}: React.ComponentProps<typeof Card>) {
    return (
        <Card {...props}>
            <CardHeader>
                <CardTitle className="text-lg tracking-normal">
                    Password
                </CardTitle>
                <CardDescription className="leading-none">
                    Update password
                </CardDescription>
            </CardHeader>
            <CardContent className="grid border-y p-6 sm:px-8 gap-6">
                <Input
                    id="password"
                    type="password"
                    className="max-w-lg h-12"
                    placeholder="Password"
                />
                <Input
                    id="confirmPassword"
                    type="confirmPassword"
                    className="max-w-lg h-12"
                    placeholder="Confirm password"
                />
            </CardContent>
            <CardFooter className="justify-end p-2">
                <Button>
                    Update
                </Button>
            </CardFooter>
        </Card>
    )
}
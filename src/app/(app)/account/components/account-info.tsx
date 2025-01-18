import React from "react"
import { ImageIcon } from "lucide-react"
import { useAuthStore } from "@/stores/auth"
import { Button } from "@/components/ui/button"

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

export function AccountInfo({
    ...props
}: React.ComponentProps<'div'>) {
    const { user } = useAuthStore()

    return (
        <div {...props}>
            <Card>
                <CardContent className="flex flex-col justify-center items-center p-6 gap-4">
                    <Avatar className="size-24 rounded-full text-sm">
                        <AvatarImage src={user?.avatar} alt={user?.firstName} />
                        <AvatarFallback className="rounded-full">
                            <ImageIcon className="size-10 text-muted-foreground" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 className="text-xl font-semibold">
                            {user ? `${user?.firstName} ${user?.lastName}` : ''}
                        </h3>
                        <span className="text-sm text-muted-foreground">Los Angeles USA</span>
                        <span className="text-sm text-muted-foreground">GTM-7</span>
                    </div>
                </CardContent>
                <CardFooter className="border-t p-2">
                    <Button variant="ghost" className="w-full">
                        Upload picture
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
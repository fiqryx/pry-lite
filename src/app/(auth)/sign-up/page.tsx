import { createMetadata } from "@/lib/metadata"
import { SingUpForm } from "./components/form"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const metadata = createMetadata({ title: 'Sign up' })

export default function SingUp() {
    return (
        <div className="w-full h-screen bg-background flex items-center justify-center px-4">

            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Sign up
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to sign up to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SingUpForm />
                    <div className="mt-4 text-center text-sm">
                        Already have account?{" "}
                        <a href="/sign-in" className="underline">
                            Sign in
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
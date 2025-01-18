import { createMetadata } from "@/lib/metadata"
import { SignInForm } from "./components/form"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const metadata = createMetadata({ title: 'Sign in' })

export default function SignIn() {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-background px-4">

            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Sign in
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SignInForm />
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <a href="/sign-up" className="underline">
                            Sign up
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

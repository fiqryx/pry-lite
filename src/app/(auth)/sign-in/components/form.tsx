import { z } from "zod"
import React from "react"
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    signInWithOAuth,
    signInWithPassword
} from "@/lib/auth"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    email: z.string({ required_error: "email is required" }).
        min(1, { message: "email is required" }).
        email({ message: 'invalid email address' }),
    password: z.string({ required_error: 'password is required' }).
        min(1, { message: "password is required" })
})

export function SignInForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const { setError, ...form } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "user@example.com",
            password: "user123",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const { error } = await signInWithPassword(values)

        if (error) {
            setIsLoading(false)
            toast({ description: error })
            setError('password', { message: error })
            return
        }

        window.location.reload()
    }

    async function onSubmitOAuth(provider: 'google' | 'github' | 'discord') {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const { error } = await signInWithOAuth({ provider })

        if (error) {
            setIsLoading(false)
            toast({ description: error })
            setError('password', { message: error })
            return
        }

        window.location.reload()
    }

    return (
        <div
            {...props}
            className={cn("grid gap-6", className)}
        >
            <Form setError={setError} {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="sr-only">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                disabled={isLoading}
                                                placeholder="Enter email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid">
                                <div className="flex items-center gap-4">
                                    <a
                                        href="/reset-password"
                                        className="ml-auto inline-block text-sm text-center underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="sr-only">
                                                Password
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    disabled={isLoading}
                                                    placeholder="Enter password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Sign in with email
                        </Button>
                    </div>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        or continue with
                    </span>
                </div>
            </div>
            <Button
                type="button"
                variant="outline"
                disabled={isLoading}
                onClick={() => onSubmitOAuth('github')}
            >
                <Icons.gitHub className="mr-2 h-4 w-4" /> GitHub
            </Button>
        </div>
    )
}
import { z } from "zod"
import React from "react"
import { toast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { signInWithOAuth } from "@/lib/auth"
import { zodResolver } from "@hookform/resolvers/zod"

import { Icons } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
    firstName: z.string({ required_error: "first name is required" }).
        min(1, { message: "email is required" }),
    lastName: z.string({ invalid_type_error: "invalid format" }).
        optional(),
    email: z.string({ required_error: "email is required" }).
        min(1, { message: "email is required" }).
        email({ message: 'invalid email address' }),
    password: z.string({ required_error: 'password is required' }).
        min(1, { message: "password is required" })
})

export function SingUpForm() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const { setError, ...form } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log({ values });
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(values, null, 2)}
                    </code>
                </pre>
            ),
        })

        setIsLoading(false)
    }

    async function onSubmitOAuth(provider: 'google' | 'github' | 'discord') {
        setIsLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const { error } = await signInWithOAuth({ provider })

        if (error) {
            setIsLoading(false)
            toast({ description: error })
            return
        }

        window.location.reload()
    }

    return (
        <Form setError={setError} {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="firstName">
                                    First name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="firstName"
                                        disabled={isLoading}
                                        placeholder="Jhon"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="lastName">
                                    Last name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        id="lastName"
                                        disabled={isLoading}
                                        placeholder="Diver"
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
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
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
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
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
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                >
                    {isLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create account
                </Button>
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
                    className="w-full"
                    onClick={() => onSubmitOAuth('github')}
                >
                    <Icons.gitHub className="mr-2 h-4 w-4" /> GitHub
                </Button>
            </form>
        </Form>
    )
}
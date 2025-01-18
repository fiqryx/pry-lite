import React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuthStore } from "@/stores/auth"
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
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const schema = z.object({
    firstName: z.string({
        required_error: 'first name is required'
    }).min(1, { message: 'first name is required' }),
    lastName: z.string().optional(),
    email: z.string({
        required_error: 'email is required'
    }).min(1, { message: 'email is required' }),
    phone: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
})

export function AccountForm({
    ...props
}: React.ComponentProps<'div'>) {
    const { user } = useAuthStore()
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        values: user,
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            country: ''
        },
    })

    async function onSubmit(data: z.infer<typeof schema>) {
        console.log({ data });
    }

    return (
        <div {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg tracking-normal">
                                Profile
                            </CardTitle>
                            <CardDescription className="leading-none">
                                The information can be edited
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid lg:grid-cols-2 border-y p-6 gap-5">
                            <FormField
                                name="firstName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel htmlFor="firstName">
                                            First name
                                        </FormLabel>
                                        <Input {...field} id="firstName" autoComplete="off" />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="lastName"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel htmlFor="lastName">
                                            Last name
                                        </FormLabel>
                                        <Input {...field} id="lastName" autoComplete="off" />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="email"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel htmlFor="email">
                                            Email
                                        </FormLabel>
                                        <Input {...field} id="email" autoComplete="off" />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="phone"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel htmlFor="phone">
                                            Phone
                                        </FormLabel>
                                        <Input {...field} id="phone" autoComplete="off" />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="city"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel htmlFor="city">
                                            City
                                        </FormLabel>
                                        <Input {...field} id="city" autoComplete="off" />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="country"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="country">
                                            Country
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger id="country">
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="united states">United States</SelectItem>
                                                    <SelectItem value="germany">Germany</SelectItem>
                                                    <SelectItem value="spain">Spain</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter className="justify-end p-2">
                            <Button type="submit">
                                Save changes
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    )
}
import { z } from 'zod'
import { createRandomMultiple } from '@/lib/faker'

export const customerSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    photo: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
})

export type Customer = z.infer<typeof customerSchema>

export const customers = z.array(customerSchema).parse(createRandomMultiple({
    count: 5,
    extends: (f) => ({
        name: f.person.fullName(),
        email: f.internet.email({ provider: 'example.dev' }),
        photo: f.helpers.arrayElement([
            '/assets/avatar-1.jpg',
            '/assets/avatar-2.jpg',
            '/assets/avatar-3.jpg',
            '/assets/avatar-4.jpg',
        ]),
        phone: f.phone.number({ style: 'national' }),
        address: f.location.streetAddress({ useFullAddress: true }),
        city: f.location.city(),
        country: f.location.country(),
    })
}))
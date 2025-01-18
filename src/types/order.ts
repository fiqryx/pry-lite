import { z } from "zod"
import { createRandomMultiple } from "@/lib/faker"

export const orderStatusSchema = z.enum([
    'pending',
    'completed',
    'rejected'
])

export const orderSchema = z.object({
    id: z.string(),
    customer: z.string(),
    date: z.date().optional(),
    status: orderStatusSchema,
})

export type Order = z.infer<typeof orderSchema>

export type OrderStatus = z.infer<typeof orderStatusSchema>

export const orders = z.array(orderSchema).parse(createRandomMultiple({
    count: 6,
    extends: (f) => ({
        customer: f.person.fullName(),
        date: f.date.recent({ days: 30 }),
        status: f.helpers.enumValue(orderStatusSchema.enum)
    })
})).map((v, i) => {
    const id = `ORD-${String(i + 1).padStart(3, "0")}`
    return { ...v, id }
})
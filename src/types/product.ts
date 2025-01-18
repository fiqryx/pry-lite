import { z } from "zod"
import { createRandomMultiple } from "@/lib/faker"


export const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
})

export type Product = z.infer<typeof productSchema>

export const products = z.array(productSchema).parse(createRandomMultiple({
    count: 5,
    extends: (f) => ({
        name: f.commerce.productName(),
        image: f.helpers.arrayElement([
            '/assets/product-1.jpg',
            '/assets/product-2.jpg',
            '/assets/product-3.jpg',
            '/assets/product-4.jpg',
        ])
    })
}))

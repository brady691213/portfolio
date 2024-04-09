import {z} from "astro:content"

export let skillSchema: any
skillSchema = z.object({
    name: z.string(),
    strength: z.string(),
    years: z.number()
})
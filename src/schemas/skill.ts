import {z} from "astro:content"

const skillSchema = z.object({
    name: z.string(),
    strength: z.enum(["Novice", "Proficient", "Strong"]),
    years: z.number().optional()
})

export default skillSchema
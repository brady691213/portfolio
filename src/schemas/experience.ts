import {z} from "astro:content";

const experienceSchema = z.object({
    employer: z.string(),
    position: z.string(),
    location: z.string(),
    remote: z.enum(["On Site", "Hybrid", "Remote"]),
    startDate: z.date(),
    description: z.string(),
    endDate: z.date().optional(),
    url: z.string().optional(),
    highlights: z.array(z.string()),
})

export default experienceSchema
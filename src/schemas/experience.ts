import {z} from "astro:content";

export let experienceSchema: any;
experienceSchema = z.object({
    employer: z.string(),
    position: z.string(),
    location: z.string(),
    startDate: z.date(),
    description: z.string(),
    endDate: z.date().optional(),
    url: z.string().optional(),
    highlights: z.array(z.string()),
})
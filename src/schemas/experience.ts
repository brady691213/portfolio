import {z} from "astro:content";

export let experienceSchema: any;
experienceSchema = z.object({
    employer: z.string(),
    position: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    url: z.string(),
    highlights: z.array(z.string()),
})
import {defineCollection} from 'astro:content';
import {experienceSchema} from "../schemas/experience.ts";
import {skillSchema} from "../schemas/skill.ts";

const experiences = defineCollection({
	type: "content",
	schema: experienceSchema
})

const skills = defineCollection({
	type: "content",
	schema: skillSchema
})

export const collections = {
	"experience": experiences,
	"skills": skills
}



import { defineCollection, z } from "astro:content";

export const collections = {
  jobs: defineCollection({
    type: "content",
    schema: z.object({
      companyName: z.string(),
      aka: z.string().optional(),
      url: z.string().url().optional(),
      note: z.string().optional(),
      location: z.string(),
      // This avoids finding the min start date of positions to sort jobs
      initialStartDate: z.string().date(),
      positions: z.array(
        z.object({
          title: z.string(),
          // Omit for full-time
          classification: z
            .union([z.literal("part-time"), z.literal("freelance")])
            .optional(),
          // The "day" part of these dates are not used
          startDate: z.string().date(),
          endDate: z.union([z.string().date(), z.literal("present")]),
        }),
      ),
      // TODO: Add a brief description of the company?
      // TODO: Add list of skills?
    }),
  }),
  projects: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        category: z.union([z.literal("software"), z.literal("mech_eng")]),
        image: z
          .object({
            path: image(),
            alt: z.string(),
          })
          .optional(),
        // Date for sorting purposes (possibly approximate)
        date: z.string().date(),
        // TODO: Add list of tags/skills?
      }),
  }),
};

"use server"

import { generateObject } from "ai"
import { z } from "zod"

export async function generateRecipe(prompt: string) {
  const { object } = await generateObject({
    model: "gpt-4",
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(z.string()),
        steps: z.array(z.string()),
      }),
    }),
    prompt: prompt,
  })

  return object
}

import { z } from "zod"

const envSchema = z.object({
  VITE_API_BASE_URL: z.url(),
})

// Validates environment variables at startup — fails fast with a clear error
// if any required variables are missing or malformed.
export const env = envSchema.parse(import.meta.env)

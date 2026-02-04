import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(128, "Name must be at most 128 characters long")
    .regex(/^[a-zA-Z ]+$/, "Name must only contain letters and spaces"),
  email: z
    .email("Invalid email address")
    .max(128, "Email must be at most 128 characters long"),
  subject: z
    .string()
    .min(4, "Subject must be at least 4 characters long")
    .max(128, "Subject must be at most 128 characters long"),
  message: z
    .string()
    .min(4, "Message must be at least 4 characters long")
    .max(500, "Message must be at most 500 characters long")
    .optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;

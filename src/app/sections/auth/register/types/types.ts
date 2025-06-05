import { z } from 'zod';

/**
 * Email Schema & Type
 */
export const emailSchema = z.object({
  email: z.string().email("Invalid email format"),
});
export type EmailFormData = z.infer<typeof emailSchema>;

/**
 * OTP Schema & Type
 */

// Zod schema: OTP must be exactly 6 digits
export const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

export type OTPFormData = z.infer<typeof otpSchema>;

/**
 * Step 3: Credentials Schema & Type
 */
export const credentialsSchema = z
  .object({
    name: z.string().min(2, "Nombre requerido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

  export type CredentialsFormData = z.infer<typeof credentialsSchema>;

  /**
   * Final registration payload (step 3 output)
   */

export interface CreateUserData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  onboardingId: string;
}

/**
 * Step index used in wrapper
 */

export type Step = 1 | 2 | 3 | 4; // Extendable
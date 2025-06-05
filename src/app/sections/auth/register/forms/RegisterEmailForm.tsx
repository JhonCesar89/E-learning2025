'use client';
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailSchema, EmailFormData } from '../types/types';

//  Modify the prop to return both email and onboarding_id
const RegisterEmailForm = ({
  onSuccess,
}: {
  onSuccess: (email: string, onboarding_id: string) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //  react-hook-form setup with Zod validation
  const { register, handleSubmit, formState: { errors }, } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  // Handles form submission, sends email, gets onboarding_id
  const onSubmit = async (data: EmailFormData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:3001/api/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email }),
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.error || 'Unknown error');
    }

    const { onboarding_id } = result;

    // Pass email and onboardingId back to parent
    onSuccess(data.email, onboarding_id);
  } catch (err) {
    console.error("Error creating onboarding:", err);
    setError("Failed to register email. Try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex flex-col h-full w-full max-w-xl mx-auto px-4">      

      {/* Main content (heading and form) */}
      <div className="bg-white border-blue-300 justify-center shadow-lg border-2 rounded-2xl w-full overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-700 text-center p-6">Registra tu Email</h3>
        
        {/* Form with email input and error handling */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl bg-white border-gray-500 items-center shadow-xl rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
          <div>
            <label className="block text-sm mb-2 font-medium text-gray-700">Email:</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Ingresa tu email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Submit button with loading state */}
          <button
            type="submit"
            disabled={loading}
            className={`py-2 px-4 rounded-lg font-normal transition duration-200 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-200 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {loading ? "Enviando..." : "Enviar código"}
          </button>

          {/* Error message display */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>

    </div>
  );
};

export default RegisterEmailForm;
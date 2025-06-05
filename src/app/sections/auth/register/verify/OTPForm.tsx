'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyOTP, resendOTP } from "../actions/authActions";
import { otpSchema, OTPFormData } from "../types/types";

interface OTPFormProps {
  email: string;
  onboarding_id: string; // Required for backend validation
  onSuccess: () => void;
}

const OTPForm: React.FC<OTPFormProps> = ({ email, onboarding_id, onSuccess }) => {
  const [loading, setLoading] = useState(false); // Tracks form submit status
  const [error, setError] = useState<string | null>(null); // For showing error messages
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // For showing success messages
  const [resendCooldown, setResendCooldown] = useState(0); // To throttle resend OTP
  

  const { register, handleSubmit, formState: { errors } } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
  });

  // Submit the form
  const onSubmit = async (data: OTPFormData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const isValid = await verifyOTP(onboarding_id, data.otp);
      if (isValid) {
        setSuccessMessage(`OTP verificado con éxito para: ${email}`);
        setTimeout(() => {
          onSuccess(); // Advance to the next step after a short delay
        }, 1000);
      } else {
        setError("OTP inválido. Intenta de nuevo.");
      }
    } catch {
      setError("Algo salió mal al verificar.");
    }

    setLoading(false);
  };

  // Resend OTP
  const handleResendOTP = async () => {
    if (resendCooldown > 0) return;

    try {
      await resendOTP(email, onboarding_id);
      setResendCooldown(30);

      const interval = setInterval(() => setResendCooldown(prev => prev - 1), 1000);
      setTimeout(() => clearInterval(interval), 30000);
    } catch {
      setError("No se pudo reenviar el OTP. Inténtalo más tarde.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white border-blue-300 border-2 rounded-xl shadow-md">
      <h2 className="flex text-xl font-semibold text-gray-500 justify-center">Ingresar código</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div>
          <label className="block text-gray-600">Código:</label>
          <input
            {...register("otp")}
            type="text"
            disabled={loading}
            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
            maxLength={6}
          />
          {errors.otp && <p className="text-red-500 text-sm">{errors.otp.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-500"
        >
          {loading ? "Verificando..." : "Verificar código"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}

        <button
          type="button"
          onClick={handleResendOTP}
          disabled={resendCooldown > 0}
          className="mt-4 w-full bg-gray-500 text-white py-3 rounded hover:bg-gray-600"
        >
          {resendCooldown > 0 ? `Reenviar en ${resendCooldown}s` : "Reenviar Código"}
        </button>

        
      </form>
    </div>
  );
};

export default OTPForm;
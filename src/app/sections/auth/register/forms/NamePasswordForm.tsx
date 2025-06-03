'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { credentialsSchema, CredentialsFormData } from '../types/types';


const NamePasswordForm = ({
  onSuccess,
}: {
  onSuccess: (data: CredentialsFormData) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsFormData>({
    resolver: zodResolver(credentialsSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSuccess)}
      className="flex flex-col gap-6 bg-white p-6 rounded-xl border-blue-300 border-2 shadow-lg w-full max-w-md"
    >
      <div>
        <label>Nombre</label>
        <input {...register("name")} className="w-full p-2 border rounded" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} className="w-full p-2 border rounded" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      <div>
        <label>Confirma el Password</label>
        <input type="password" {...register("confirmPassword")} className="w-full p-2 border rounded" />
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" className="bg-blue-400 text-white py-2 rounded hover:bg-blue-500">
        Completar Registro
      </button>
    </form>
  );
};

export default NamePasswordForm;

// This component is a form for entering a name and password during the registration process.
// It uses React Hook Form and Zod for validation.
// The form includes fields for name, password, and confirm password.
// It validates that the name is at least 2 characters long and that the password is at least 6 characters long.
// It also checks that the password and confirm password fields match.
// When the form is successfully submitted, it calls the onSuccess function with the form data.
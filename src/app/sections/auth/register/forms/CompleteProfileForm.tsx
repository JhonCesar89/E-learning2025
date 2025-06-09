'use client';

import { useRouter } from 'next/navigation'
import { signIn, getSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Schema for validating final profile step
const completeProfileSchema = z.object({
  companyName: z.string().min(2, 'El nombre de la empresa es requerido'),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar los términos y condiciones' }),
  }),
});

type CompleteProfileFormData = z.infer<typeof completeProfileSchema>;

// Props passed from registration wrapper
interface CompleteProfileFormProps {
  onboardingId: string;
  email: string;
  password: string; // Needed for auto-login
  onComplete: (data: CompleteProfileFormData) => void;
}

// Final registration step: company info and terms
const CompleteProfileForm: React.FC<CompleteProfileFormProps> = ({
  onboardingId,
  email,
  password,
  onComplete,
}) => {
  const router = useRouter();
  
  // react-hook-form setup with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompleteProfileFormData>({
    resolver: zodResolver(completeProfileSchema),
  });

  // Final submission handler
  const handleFinalSubmit = async (data: CompleteProfileFormData) => {
    try {
      // 1. Save profile data to backend
      const res = await fetch('http://localhost:3001/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          onboardingId,
          companyName: data.companyName,
          acceptedTerms: true, // always true since required
        }),
      });

      const result = await res.json();

      if (!result.success) {
        console.error('Error saving profile:', result.error);
        return;
      }

      // 2. Auto-login using email/password after successful profile save
      const loginRes = await signIn('credentials', {
        email,
        password,
        redirect: false, // prevent full reload
      });

      if (!loginRes?.ok) {
        console.error('Auto-login failed');
        return;
      }

      // Step 3: Get session and redirect based on role
      const session = await getSession();
      const role = session?.user?.role;

      onComplete(data); // mark step complete

      switch (role) {
        case 'INSTRUCTOR':
          router.push('/platform/instructor');
          break;
        case 'STUDENT':
          router.push('/platform/student');
          break;
        case 'ADMIN':
          router.push('/platform/admin');
          break;
        case 'SUPER_ADMIN':
          router.push('/platform/director');
          break;
        default:
          router.push('/platform');
      }

    } catch (err) {
      console.error('Network error:', err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(handleFinalSubmit)} 
      className="w-full max-w-md space-y-6 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold text-blue-600 text-center">Completa tu perfil</h2>

      {/* Email (readonly) */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Correo electrónico registrado</label>
        <input value={email}
          disabled
          className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md" 
          />
      </div>

      {/* Onboarding ID (readonly) */}
      <div>
        <label className="block text-sm font-medium text-gray-700">ID_Cliente</label>
        <input 
          value={onboardingId} 
          disabled 
          className="mt-1 block w-full px-4 py-2 bg-gray-100 rounded-md" 
        />
      </div>

      {/* Company name input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre de la Empresa/Cliente
        </label>
        <input
          {...register('companyName')}
          placeholder="Ej: DevOps Solutions S.A."
          type="text"
          autoComplete="organization"
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm">
            {errors.companyName.message}
          </p>
        )}
      </div>

      {/* Accept terms checkbox */}
      <div className="flex items-start">
        <input
          type="checkbox"
          {...register('acceptTerms')}
          required
          id="acceptTerms"
          aria-describedby="acceptTermsError"
          className="mr-2 mt-1"
        />
        <label className="text-sm text-gray-700">
          Acepto la{' '}
          <a href="#" 
            className="underline text-blue-600">
              Política de Privacidad
          </a>{' '}
          y los{' '}
          <a href="#" className="underline text-blue-600">
            Términos y Condiciones
          </a>.
        </label>
      </div>
      {errors.acceptTerms && (
        <p className="text-red-500 text-sm">{errors.acceptTerms.message}</p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Finalizar registro
      </button>
    </form>
  );
};

export default CompleteProfileForm;

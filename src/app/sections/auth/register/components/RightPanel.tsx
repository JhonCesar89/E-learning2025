'use client'

import StepWrapper from "./StepWrapper"
import Link from 'next/link'
import LoginForm from '../../login/components/LoginForm'
import { CredentialsFormData } from "../types/types"

interface RightPanelProps {
  mode: 'register' | 'login';
  step?: number;
  email?: string;
  onboardingId: string; 
  onEmailVerified: (email: string, onboardingId: string) => void;
  onOTPVerified: () => void;
  onCredentialsSubmitted: (data: CredentialsFormData) => void;
  onProfileCompleted: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  mode,
  step = 1,
  email = '',
  onboardingId = '',
  onEmailVerified,
  onOTPVerified,
  onCredentialsSubmitted,
  onProfileCompleted,
}) => {

  return (
    <div className="flex flex-col w-full h-full  items-center justify-center rounded-l-2xl p-6 overflow-hidden">
      
      {/* Top link  */}
      <div className="w-full flex justify-start text-sm mb-4">
        {mode === 'register' ? (
          <>
             <p className="text-gray-700">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="text-blue-600 hover:underline font-medium">
                Inicia sesión
              </Link>
            </p>
          </>
        ) : (
          <>
            <span className="text-gray-700">¿No tienes una cuenta? </span>
            <Link href="/?view=register" className="text-blue-600 ml-2 hover:underline font-medium">
              Crear una cuenta
            </Link>
          </>
          )}
      </div>

      {/* Welcome */}
      <div className="mb-6">
        <h2 
          className="text-4xl font-bold text-blue-600 mt-8 mb-8 p-6">
          ¡Hola bienvenido a SkilLogin Academy!
        </h2>
        <p className="text-gray-600 mb-6 mt-8 text-center justify-center p-2">
          {mode === 'register'
            ? 'Por favor, ingresa tus datos para registrarte a nuestra plataforma.'
            : 'Por favor, ingresa tus credenciales para acceder a tu cuenta.'}
        </p>
      </div>

      {/* Dynamic form */}
      <div className="w-full max-w-xl items-center rounded-2xl flex flex-col py-2">
        {mode === 'register' ? (
          <StepWrapper
            step={step}
            email={email}
            onboardingId={onboardingId}
            onEmailVerified={onEmailVerified!}
            onOTPVerified={onOTPVerified!}
            onCredentialsSubmitted={onCredentialsSubmitted!}
            onProfileCompleted={onProfileCompleted!}
          />
        ) : (
          <LoginForm />
        )}
      </div>

      {/* Footer */}
      <div className="text-xs text-blue-800 text-center mt-4">
        <a href="#" className="underline">Política de Privacidad</a> ·{" "}
        <a href="#" className="underline">Términos y Condiciones</a>
      </div>
    </div>
  );
};

export default RightPanel;

// RightPanel.tsx
// RightPanel.tsx is a React functional component that serves as the right panel of a registration form.
// It includes a link for users who already have an account, a welcome message, and a step wrapper for the registration process.
// The component uses Tailwind CSS for styling and is designed to be responsive.
// The step wrapper is responsible for rendering different forms based on the current step of the registration process.
// The component also includes a footer with links to the privacy policy and terms and conditions.
// The component is structured to be visually appealing and user-friendly, making it suitable for a registration page.
// The component is designed to be reusable and can be easily integrated into other parts of the application.
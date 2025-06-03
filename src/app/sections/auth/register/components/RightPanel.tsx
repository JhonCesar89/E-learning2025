'use client';
import StepWrapper from "./StepWrapper"
import Link from 'next/link';
import { CredentialsFormData } from "../types/types"

interface RightPanelProps {
  step: number;
  email: string;
  onboardingId: string; // new
  onEmailVerified: (email: string, onboardingId: string) => void;
  onOTPVerified: () => void;
  onCredentialsSubmitted: (data: CredentialsFormData) => void;
  onProfileCompleted: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  step,
  email,
  onboardingId,
  onEmailVerified,
  onOTPVerified,
  onCredentialsSubmitted,
  onProfileCompleted,
}) => {

  return (
    <div className="flex flex-col w-full h-full items-center justify-center rounded-l-2xl p-6 overflow-hidden">
      
      {/* Top-right: Already have account */}
      <div className="flex-row border-gray-200 items-center py-6">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/login" className="text-blue-600 mt-8 hover:underline font-medium">
        Inicia sesión
        </Link>
        <h2 className="text-4xl justify-center items-center font-bold text-blue-600 mt-8 mb-8 text-center p-6">¡Hola bienvenido a SkilLogin Academy!</h2>
        <p className="text-gray-600 mb-6 mt-8 text-center justify-center p-2">
          Por favor, ingresa tus datos para registrarte a nuestra plataforma.
        </p>
      </div>

      {/* Card container */}
      <div className="w-full max-w-xl items-center rounded-2xl flex flex-col py-2">
        {/* Step content */}
        <div className="flex-grow my-6">
          <StepWrapper
            step={step}
            email={email}
            onboardingId={onboardingId}
            onEmailVerified={onEmailVerified}
            onOTPVerified={onOTPVerified}
            onCredentialsSubmitted={onCredentialsSubmitted}
            onProfileCompleted={onProfileCompleted}
          />
        </div>

        {/* Footer */}
        <div className="text-xm text-blue-800 text-center my-6">
          <a href="#" className="underline">Política de Privacidad</a> ·{" "}
          <a href="#" className="underline">Términos y Condiciones</a>
        </div>
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
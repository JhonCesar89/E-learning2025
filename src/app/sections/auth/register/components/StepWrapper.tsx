// src/sections/auth/register/components/StepWrapper.tsx
// StepWrapper.tsx to switch between the different registration stps.
import { useState } from 'react'
import RegisterEmailForm from "../forms/RegisterEmailForm"
import ContainerOTP from "../verify/ContainerOTP"
import NamePasswordForm from "../forms/NamePasswordForm"
import { completeRegistration } from "../actions/authActions"
import CompleteProfileForm from '../forms/CompleteProfileForm'
import { CredentialsFormData } from "../types/types"

interface StepWrapperProps {
  step: number;
  email: string;
  onboardingId: string;
  onEmailVerified: (email: string, onboardingId: string) => void;
  onOTPVerified: () => void;
  onCredentialsSubmitted: (data: CredentialsFormData) => void;
  onProfileCompleted: () => void;
}

const StepWrapper: React.FC<StepWrapperProps> = ({
  step,
  email,
  onboardingId,
  onEmailVerified,
  onOTPVerified,
  onCredentialsSubmitted,
  onProfileCompleted,
}) => {
  
  // Hold password here to use for autologin later
  const [credentials, setCredentials] = useState<CredentialsFormData | null>(null);

  // Step 4: Final profile setup + autologin
  if (step === 4) {
    return (
      <CompleteProfileForm
        onboardingId={onboardingId}
        email={email}
        password={credentials?.password || ''} // Send password for auto-login
        onComplete={(data) => {
          console.log('Complete profile data:', data);
          onProfileCompleted(); // call to move to platform
        }}
      />
    );
  }

  // Other steps in registration
  switch (step) {
    case 1:
      return <RegisterEmailForm onSuccess={onEmailVerified} />;
    
      // Step 2: OTP verification
    case 2:
      return (
        <ContainerOTP
          email={email}
          onboarding_id={onboardingId}
          onVerified={onOTPVerified}
        />
      );
    
      // Step 3: Name + Password form
    case 3:
      return <NamePasswordForm
      onSuccess={async (formData) => {
        const result = await completeRegistration({
          email,
          onboardingId,
          ...formData
    });

    if (result) {
      setCredentials(formData); // Store credentials for later use
      onCredentialsSubmitted(formData); // Move to profile step
    } else {
      console.error("Failed to complete registration");
    }
  }}
/>
      default:
        return <p className="text-red-500 font-semibold">Unknown registration step.</p>;
  }
};

export default StepWrapper;
// StepWrapper.tsx
// StepWrapper.tsx is a component that renders different forms based on the current step of the registration process.
// It takes in the current step, email, onboardingId, and callback functions for handling email verification, OTP verification, and credentials submission.
// The component uses a switch statement to determine which form to render based on the current step.
// It imports three form components: RegisterEmailForm, ContainerOTP, and NamePasswordForm.
// Each of these components is responsible for a specific part of the registration process.
// The RegisterEmailForm is displayed at step 1, the ContainerOTP is displayed at step 2, and the NamePasswordForm is displayed at step 3.
// The component is designed to be reusable and can be easily integrated into other parts of the application.
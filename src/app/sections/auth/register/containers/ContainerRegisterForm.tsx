// src/sections/auth/register/containers/ContainerRegisterForm.tsx
import React, { useState } from "react"
import LeftPanel from "../components/LeftPanel"
import RightPanel from "../components/RightPanel"
import { Step, CredentialsFormData, CreateUserData } from "../types/types"

interface ContainerRegisterFormProps {
  onExploreClick: () => void;
}

const ContainerRegisterForm: React.FC<ContainerRegisterFormProps> = ({ onExploreClick }) => {
  const [step, setStep] = useState<Step>(1); // Tracks registration flow steps
  const [email, setEmail] = useState<string>(""); // Stores user email
  const [onboardingId, setOnboardingId] = useState<string>(""); // Stores onboarding_id from API
  const [registrationComplete, setRegistrationComplete] = useState(false);

  // Called from Step 1 (email verification), gets onboardingId
  const handleEmailVerified = (
    verifiedEmail: string,
    onboarding_id: string,
    resumeStep: Step = 2 // Optional step to resume from
  ) => {
    setEmail(verifiedEmail);
    setOnboardingId(onboarding_id); // Save onboarding_id for OTP verification
    setStep(resumeStep); // Proceed to OTP step
  };

  // Called after successful OTP validation
  const handleOTPVerified = () => {
    setStep(3); // Proceed to credentials form
  };

  // Final step: called after user submits name and password
  const handleCredentialsSubmitted = (data: CredentialsFormData) => {
    const finalPayload: CreateUserData = { email, onboardingId, ...data }; // Combine email and credentials
    console.log("Final registration payload:", finalPayload); // Send to backend
    setStep(4); // Move to profile completion step
    // Here you would typically call an API to create the user
  };

  const handleProfileCompleted = () => {
  // Simulate platform access
  console.log("User fully onboarded. Redirecting to platform...");
  setRegistrationComplete(true);
  
};

  return (
    <div className="w-full flex justify-center items-center h-screen overflow-hidden">
      {registrationComplete ? (
        <div className="text-center text-green-700 font-semibold text-xl p-4">
          Cuenta creada exitosamente. ¡Bienvenido/a!
        </div>
      ) : (

        // Main registration form container
        <div className="w-full justify-center flex min-h-screen bg-gray-50">

          {/* Left panel with illustration */}
          <div className="w-[40%] flex">
            <LeftPanel onExploreClick={onExploreClick} />
          </div>
          
          {/* Right panel with registration steps */}         
          <div className="w-[60%] flex bg-slate-100 justify-center p-6">
            <RightPanel 
              step={step}
              email={email}
              onboardingId={onboardingId} // Pass down for OTP step
              onEmailVerified={handleEmailVerified}
              onOTPVerified={handleOTPVerified}
              onCredentialsSubmitted={handleCredentialsSubmitted}
              onProfileCompleted={handleProfileCompleted}
            />            
          </div>             
        </div>
      )}
    </div>
  );
};

export default ContainerRegisterForm;
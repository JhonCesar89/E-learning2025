'use client';
import OTPForm from "./OTPForm";

interface ContainerOTPProps {
  email: string;
  onboarding_id: string; // Required for backend validation
  onVerified: () => void;
}

const ContainerOTP: React.FC<ContainerOTPProps> = ({ email, onboarding_id, onVerified }) => {
  return <OTPForm email={email} onboarding_id={onboarding_id} onSuccess={onVerified} />;
};

export default ContainerOTP;
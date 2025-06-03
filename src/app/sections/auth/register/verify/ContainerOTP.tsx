'use client';
import OTPForm from "./OTPForm";

interface ContainerOTPProps {
  email: string;
  onboardingId: string; // Required for backend validation
  onVerified: () => void;
}

const ContainerOTP: React.FC<ContainerOTPProps> = ({ email, onboardingId, onVerified }) => {
  return <OTPForm email={email} onboardingId={onboardingId} onSuccess={onVerified} />;
};

export default ContainerOTP;
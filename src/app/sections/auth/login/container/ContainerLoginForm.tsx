// src/sections/auth/login/containers/ContainerLoginForm.tsx
'use client';

import LeftPanel from '@/app/sections/auth/register/components/LeftPanel'
import RightPanel from '@/app/sections/auth/register/components/RightPanel'

interface ContainerLoginFormProps {
  onExploreClick: () => void;
}

const ContainerLoginForm: React.FC<ContainerLoginFormProps> = ({ onExploreClick }) => {
  return (
    <div className="w-full flex justify-center items-center h-screen overflow-hidden">
      <div className="w-full justify-center flex min-h-screen bg-gray-50">

        {/* Left panel with explore prompt */}
        <div className="w-[40%] flex">
          <LeftPanel onExploreClick={onExploreClick} />
        </div>

        {/* Right panel with login form */}
        <div className="w-[60%] flex bg-slate-100 justify-center p-6">
          <RightPanel
            mode="login"
            onboardingId={""}
            onEmailVerified={() => {}}
            onOTPVerified={() => {}}
            onCredentialsSubmitted={() => {}}
            onProfileCompleted={() => {}}
          />
        </div>
        
      </div>
    </div>
  );
};

export default ContainerLoginForm;

'use client';

import LeftPanel from '@/app/sections/auth/register/components/LeftPanel'
import LoginForm from '@/app/sections/auth/login/components/LoginForm'

export default function LoginPage() {
  return (
    <div className="w-full justify-center flex min-h-screen bg-gray-50">
      <div className="w-[40%] flex">
        <LeftPanel onExploreClick={() => {}} />
      </div>
      <div className="w-[60%] flex bg-slate-100 justify-center p-6">
        <LoginForm />
      </div>
    </div>
  );
}

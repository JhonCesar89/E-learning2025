'use client';

import { useRouter } from 'next/navigation';
import ContainerLoginForm from '@/app/sections/auth/login/container/ContainerLoginForm';

export default function LoginPage() {
  const router = useRouter();

  return (
    <ContainerLoginForm onExploreClick={() => router.push('/?view=explore')} />
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ContainerRegisterForm from './sections/auth/register/containers/ContainerRegisterForm';
import HomePage from './components/HomePage';
import ContainerHome from './sections/home/container/HomeContainer';

export default function Page() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<'home' | 'register' | 'public-home'>('home');

  // Handle ?view=register or ?view=explore from URL
  useEffect(() => {
    const urlView = searchParams.get('view');
    if (urlView === 'register') {
      setView('register');
    } else if (urlView === 'explore') {
      setView('public-home');
    }
  }, [searchParams]);

  return (
    <>
      {view === 'home' && (
        <HomePage
          onRegisterClick={() => setView('register')}
          onContinueClick={() => setView('public-home')}
        />
      )}

      {view === 'register' && (
        <ContainerRegisterForm onExploreClick={() => setView('public-home')} />
        
      )}
      {view === 'public-home' && (
        <ContainerHome onRegisterClick={() => setView('register')} />
      )}
    </>
  );
}

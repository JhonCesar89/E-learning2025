'use client';

import { useState } from 'react';
import ContainerRegisterForm from './sections/auth/register/containers/ContainerRegisterForm';
import HomePage from './components/HomePage';
import ContainerHome from './sections/home/container/HomeContainer';

export default function Page() {
  const [view, setView] = useState<'home' | 'register' | 'public-home'>('home');

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

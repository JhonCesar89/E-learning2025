'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ContainerRegisterForm from '../sections/auth/register/containers/ContainerRegisterForm';
import HomePage from './HomePage';
import ContainerHome from '../sections/home/container/HomeContainer';

export default function ClientHome() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<'home' | 'register' | 'public-home'>('home');

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
// This component handles the client-side routing and rendering of different views
// based on the URL parameters. It allows users to switch between the home page,
// registration form, and a public home view. The use of `useSearchParams`
// enables dynamic updates based on the query parameters in the URL, providing a
// seamless user experience without full page reloads.
import { Suspense } from 'react';
import ClientHome from './components/ClientHome';

export default function HomePageWrapper() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Cargando vista...</div>}>
      <ClientHome />
    </Suspense>
  );
}
// This component serves as a wrapper for the ClientHome component, providing a
// fallback loading state while the ClientHome component is being loaded. The
// use of `Suspense` allows for a smoother user experience by displaying a loading
// message while the main content is being prepared. This is particularly useful
// for components that may take time to load, ensuring that users are aware that
// content is being fetched or processed in the background.
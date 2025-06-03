'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function SessionProviders({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
// This component wraps the children with the SessionProvider from next-auth,
// allowing access to session data throughout the application.
// It is typically used in the root layout or a higher-level component to ensure
// that session data is available in all components that need it.
// This is particularly useful for managing user authentication state and
// providing session information to components that require it, such as user profiles or protected routes.
// By using this provider, components can access the session data via hooks like useSession,
// enabling them to conditionally render content based on the user's authentication status.
// This setup is essential for applications that require user authentication and session management
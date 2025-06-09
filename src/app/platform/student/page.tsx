'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function StudentDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not authenticated or wrong role
  useEffect(() => {
    if (status === 'loading') return;

    if (!session || session.user.role !== 'STUDENT') {
      router.push('/login'); // Or show error
    }
  }, [session, status, router]);

  // While loading session...
  if (status === 'loading') {
    return <p className="text-gray-500 p-8">Loading...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">Dashboard Estudiantil</h1>
      <p className="mt-4">Bienvenido, {session?.user?.name} ({session?.user?.email})</p>
      <p className="text-sm text-gray-600">Rol: {session?.user?.role}</p>
    </div>
  );
}

// This is the student dashboard page. It displays the student's name, email, and role.
// It uses the `useSession` hook from `next-auth` to access the session data.
// The page is styled with Tailwind CSS classes for a clean and modern look.
// The `useSession` hook provides the session data, which includes user information.
// The page is wrapped in a `div` with padding for spacing.
// The heading is styled with a larger font size and a blue color for emphasis.
// The welcome message includes the student's name and email, providing a personalized experience.
// The role of the user is also displayed, which can be useful for understanding permissions.
// This page is part of the student platform and is accessible only to authenticated users.
// The `useSession` hook ensures that the user is authenticated before accessing the dashboard.
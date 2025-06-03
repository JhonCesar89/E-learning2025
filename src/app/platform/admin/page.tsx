'use client';

import { useSession } from 'next-auth/react';

export default function AdminDashboard() {
  const { data: session } = useSession();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>
      <p className="mt-4">Bienvenido, {session?.user?.name}</p>
      <p className="text-sm text-gray-600">Rol: {session?.user?.role}</p>
    </div>
  );
}
// This is the admin dashboard page. It displays the admin's name and role.
// It uses the `useSession` hook from `next-auth` to access the session data.
// The page is styled with Tailwind CSS classes for a clean and modern look.
// The `useSession` hook provides the session data, which includes user information.
// The page is wrapped in a `div` with padding for spacing.
// The heading is styled with a larger font size and a red color for emphasis.
// The welcome message includes the admin's name, providing a personalized experience.
// The role of the user is also displayed, which can be useful for understanding permissions.
// This page is part of the admin platform and is accessible only to authenticated users.
'use client';

import { signIn, getSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset error message

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false, // We'll manually redirect after checking the result
      callbackUrl: '/',
    }, {
      baseUrl: 'http://localhost:3001' // Adjust this to your API base URL
    });

    if (res?.ok) {
      const session = await getSession();

    const role = session?.user?.role;

    switch (role) {
      case 'INSTRUCTOR':
        router.push('/platform/instructor');
        break;
      case 'STUDENT':
        router.push('/platform/student');
        break;
      case 'ADMIN':
        router.push('/platform/admin');
        break;
      case 'SUPER_ADMIN':
        router.push('/platform/director'); // Or reuse /admin
        break;
      default:
        setError('Unknown user role');
    }
  } else {
    setError('Invalid email or password');
  }
};

  return (
    <form onSubmit={handleLogin} className="w-full max-w-xl bg-white border-gray-500 items-center shadow-xl rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
      <h2 className="text-xl font-semibold text-gray-700 text-center p-6">
        Bienvenido a SkilLogin Academy
      </h2>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

      <div>
        <label className="block text-sm mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Login
      </button>

      <p className="text-center text-sm text-gray-600">
        ¿No tienes una cuenta?{' '}
        <a href="/register" className="text-blue-600 underline">Registrate aquí</a>
      </p>
    </form>
  );
};

export default LoginForm;

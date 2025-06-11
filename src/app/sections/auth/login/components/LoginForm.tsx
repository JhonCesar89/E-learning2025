'use client';

import { signIn, getSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset error message

    const loginRes = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (!loginRes?.ok) {
      console.error('Auto-login failed');
      return;
    }

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
        router.push("/platform");
    }
};

  return (
    <div className="flex flex-col h-full w-full max-w-xl mx-auto px-4">
      <div className="bg-white border-blue-300 justify-center shadow-lg border-2 rounded-2xl w-full overflow-hidden">
        <h3 className="text-xl font-semibold text-gray-700 text-center p-6">Inicio de sesión</h3>

        {/* Form with login data*/}
        <form onSubmit={handleLogin} className="w-full max-w-xl bg-white border-gray-500 items-center shadow-xl rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
         
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <div>
            <label className="block text-sm mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Ingresa tu email"
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
              placeholder="Ingresa tu clave"
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

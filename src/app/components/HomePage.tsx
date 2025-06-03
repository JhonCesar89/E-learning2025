'use client';

import { useRouter } from 'next/navigation';

interface HomePageProps {
  onRegisterClick?: () => void;
  onContinueClick?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onRegisterClick }) => {
  const router = useRouter();

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/students.svg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          Welcome to SkilLogin Academy
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Unlock your potential with our comprehensive courses and resources.
        </p>
        <button
          onClick={() => onRegisterClick ? onRegisterClick() : router.push('/register')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;

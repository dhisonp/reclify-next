'use client';

import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const token: string | null = searchParams ? searchParams.get('token') : null;

  const debug = () => {
    console.log(token);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 animate-fade-in">
      <div className="font-light">
        <p className="text-4xl sm:text-6xl font-mono">Hello.</p>
        <p className="text-2xl sm:text-xl tracking-wide">Welcome in.</p>
      </div>

      <button
        onClick={debug}
        className="border-2 border-black px-6 py-4 transition duration-300 hover:bg-black hover:text-white mt-14"
      >
        Debug user data &rarr;
      </button>
    </main>
  );
}

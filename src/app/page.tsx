'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [displayNotes, setDisplayNotes] = useState<boolean>(false);

  const handleGetStarted = () => {
    axios
      .get('/api/login')
      .then((res) => {
        window.location.href = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 animate-fade-in">
      <div className="font-light">
        <p className="text-4xl sm:text-6xl font-mono">Hello.</p>
        <p className="text-2xl sm:text-xl tracking-wide">
          Welcome to <a>Reclify</a>{' '}
          <button
            onClick={() => setDisplayNotes(!displayNotes)}
            className="text-sm text-gray-400 duration-300 transition cursor-pointer hover:text-gray-500"
          >
            {!displayNotes ? 'Huh?' : 'Cool.'}
          </button>
        </p>
      </div>

      {/* Expandable span */}
      <div
        className={`sm:text-center max-w-4xl leading-tight sm:leading-4 transition-all duration-300 overflow-hidden ease-in ${displayNotes ? 'opacity-100 max-h-40 mt-6' : 'opacity-20 max-h-0'}`}
      >
        <span className="">
          Reclify is not a real word. It is a helper. It is an extension of Spotify– where you can finally feel you own
          the algorithm.
          <br /> <div className="mt-1" />
          Not sure what that means? Why don't you try it? Free. Use your Spotify account. And no, I am not a malicious
          data collector.
        </span>
      </div>

      <button
        onClick={handleGetStarted}
        className="border-2 border-black px-6 py-4 transition duration-300 hover:bg-black hover:text-white mt-14"
      >
        Let's get you in &rarr;
      </button>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Hide loading screen after 4 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    // Animate progress from 0 to 100 in 4 seconds, then reset
    let progressValue = 0;
    const progressInterval = setInterval(() => {
      progressValue += 1;
      if (progressValue > 100) progressValue = 0;
      setProgress(progressValue);
    }, 40); // 40ms * 100 steps = 4 seconds

    return () => {
      clearTimeout(hideTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  // Circle circumference for progress ring
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center h-screen w-full px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Logo with circular progress ring */}
      <div className="mb-4">
        <div className="relative w-60 h-60 mx-auto mb-2 flex justify-center items-center">
          {/* Glow behind logo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg animate-pulse"></div>

          {/* SVG Circular progress ring */}
          <svg
            className="absolute"
            width="180"
            height="180"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="#e5e7eb" // light gray background ring
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r={radius}
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.04s linear' }}
            />
            <defs>
              <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo */}
          <div className="relative  z-10 w-[220px] h-[220px] bg-white rounded-full shadow-xl border-4 border-gray-100 flex items-center justify-center overflow-hidden">
            <Image
              src="/image/logo-light.png"
              alt="Company Logo"
              width={165}
              height={165}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Static message */}
      <div className="text-center space-y-6 mb-8 max-w-md mx-auto">
        <p className="text-lg font-bold text-gray-800 px-4">
          We are making us ready for you 🚀
        </p>
        <p className="text-sm text-gray-600">
          ✨ Crafting something magical for you...
        </p>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-24 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-16 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-16 w-3 h-3 bg-pink-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Pulsing Dots */}
      <div className="flex space-x-3 mt-8">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        /* you can keep your existing shine-fast and pulse if you want */
        @keyframes shine-fast {
          0% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        .animate-shine-fast {
          animation: shine-fast 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

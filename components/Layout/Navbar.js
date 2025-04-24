// components/Layout/Navbar.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/components/AuthProvider';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                FocusTasks
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Beranda
              </Link>
              
              {user ? (
                <>
                  <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                  >
                    Keluar
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Masuk
                  </Link>
                  <Link href="/register" className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-800">
                    Daftar
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
            Beranda
          </Link>
          
          {user ? (
            <>
              <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
              >
                Keluar
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                Masuk
              </Link>
              <Link href="/register" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-700 hover:bg-blue-800">
                Daftar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
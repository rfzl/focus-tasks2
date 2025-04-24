// app/login/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import LoginForm from '@/components/Auth/LoginForm';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </div>
      
      <Footer />
    </div>
  );
}
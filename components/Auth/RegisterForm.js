// components/Auth/RegisterForm.js
'use client';

import { useState } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Email dan password harus diisi');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Password tidak cocok');
      return;
    }
    
    if (password.length < 6) {
      setError('Password harus minimal 6 karakter');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      router.push('/dashboard');
    } catch (error) {
      setError('Gagal mendaftar: ' + (error.message || 'Terjadi kesalahan'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Daftar FocusTasks</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan email Anda"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Masukkan password Anda"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Konfirmasi Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Konfirmasi password Anda"
            required
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            {loading ? 'Memproses...' : 'Daftar'}
          </button>
        </div>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-gray-600">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
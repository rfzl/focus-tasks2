// app/page.js
import Link from 'next/link';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                FocusTasks
              </h1>
              <p className="mt-4 text-xl">
                Aplikasi To-Do List untuk Meningkatkan Produktivitas Anda
              </p>
              <div className="mt-10">
                <Link
                  href="/register"
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors"
                >
                  Mulai Sekarang
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Kelola Tugas dengan Mudah</h3>
                <p className="text-gray-600">
                  Tambah, edit, dan selesaikan tugas dengan antarmuka yang intuitif.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Statistik Visual</h3>
                <p className="text-gray-600">
                  Pantau produktivitas Anda dengan grafik statistik yang informatif.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Akses di Mana Saja</h3>
                <p className="text-gray-600">
                  Sinkronisasi cloud memungkinkan Anda mengakses tugas dari perangkat apa pun.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Siap untuk Meningkatkan Produktivitas?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Buat akun gratis dan mulai kelola tugas Anda dengan lebih efektif.
            </p>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors"
            >
              Daftar Sekarang
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
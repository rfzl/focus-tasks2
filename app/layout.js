// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FocusTasks - Aplikasi To-Do List Produktivitas',
  description: 'Aplikasi To-Do List untuk meningkatkan produktivitas Anda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
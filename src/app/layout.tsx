import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/common/Footer';
import React from 'react';
import ClientLayout from './ClientLayout';

const pretendard_var = localFont({
  src: '../../public/fonts/pretendard_variable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '토마토들',
  description: '토마토들에서 나에게 딱 맞는 공모전을 찾아보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard_var.className}`}>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}

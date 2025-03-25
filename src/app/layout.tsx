import { ReactNode } from 'react';
import { Header } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Respira+',
  icons: '/logo.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

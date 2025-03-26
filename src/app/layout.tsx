import { ReactNode } from 'react';
import { Footer, Header } from '@/components';
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
      <body className={`antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

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
        <div className="flex flex-col justify-between min-h-screen">
          <Header />
          <div className="pt-22">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

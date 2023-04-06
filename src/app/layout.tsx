import Header from './components/Header';
import './globals.css';
import { Noto_Sans } from 'next/font/google';

const sans = Noto_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}

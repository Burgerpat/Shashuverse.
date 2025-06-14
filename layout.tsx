import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Happy Birthday Shashu 💖',
  description: 'Made with love by Divyansh',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

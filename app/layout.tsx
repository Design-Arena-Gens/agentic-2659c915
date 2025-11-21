import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Machiavelli’s Secret Narrative Transcript',
  description:
    'Narrative transcript of the video “Machiavelli’s Secret — When You Stop Chasing, They Start Kneeling.”'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

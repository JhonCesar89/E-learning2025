import type { Metadata } from 'next';
import SessionProviders from '@/providers/SessionProviders'
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'SkiLogin Academy',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProviders>
          {children}
          <SpeedInsights />
        </SessionProviders>
      </body>
    </html>
  );
}

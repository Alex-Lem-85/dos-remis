import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mal au dos | SOS Lumbago à Sète & Montpellier',
  description:
    "Lumbago ou dos bloqué à Sète ou Montpellier ? Dos-Remis propose une prise en charge rapide avec infiltration ciblée et suivi médical personnalisé.",
  keywords: [
    "lumbago Sète",
    "SOS Lumbago",
    "urgence lumbago",
    "lumbago Montpellier",
    "mal de dos Montpellier",
    "mal de dos Sète",
    "dos bloqué",
    "douleur lombaire",
    "mal en bas du dos",
    "urgence mal de dos",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Favicon configuration */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

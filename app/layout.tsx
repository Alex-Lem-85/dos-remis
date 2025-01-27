import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dos-remis | Spécialistes du lumbago à Sète',
  description: 'Vous souffrez de lombalgie aiguë, de mal au dos ou de dos bloqué ? Le centre SOS Lumbago à Sète est spécialisé dans le traitement rapide et efficace des douleurs dorsales grâce à des infiltrations et des soins personnalisés.',
 icons: {
    icon: '/android-chrome-512x512.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
  keywords: [
    'lombalgie aiguë', 
    'lombalgie', 
    'mal au dos', 
    'SOS lumbago', 
    'dos bloqué', 
    'Sète', 
    'dos', 
    'infiltration', 
    'traitement', 
    'douleur dorsale', 
    'spécialistes du dos', 
    'soins du dos'
  ],
  openGraph: {
    title: 'Dos-remis | Spécialistes du lumbago à Sète',
    description: 'Découvrez Dos-remis à Sète : une équipe spécialisée pour soulager vos douleurs dorsales, traiter la lombalgie aiguë, et retrouver rapidement votre mobilité grâce à des techniques modernes comme SOS lumbago.',
    url: 'https://dos-remis.com/',
    images: [
      {
        url: 'https://votre-site.com/images/lombalgie-dos.jpg',
        alt: 'Traitement lombalgie aiguë - SOS Lumbago',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
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

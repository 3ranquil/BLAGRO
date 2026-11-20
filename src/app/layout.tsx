import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#059669' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://blagrointegrated.com'),
  title: {
    default: 'BL AGRO INTEGRATED GLOBAL LTD | Premium Nigerian Agro Commodities & Solid Minerals',
    template: '%s | BL AGRO INTEGRATED GLOBAL LTD',
  },
  description: 'Exporting certified Nigerian agricultural cash crops (Dried Split Ginger, Raw Cashew Nuts, Sesame Seeds, Hibiscus Flowers, Soybeans, Cocoa) and industrial solid minerals (Lithium Ore, Tantalite, Charcoal) directly to international processors.',
  keywords: [
    'BL Agro Integrated Global Ltd',
    'Nigeria Agro Export',
    'Dried Split Ginger Nigeria',
    'Raw Cashew Nuts Export',
    'Sesame Seeds Exporters Nigeria',
    'Hibiscus Flowers Zobo Leaves',
    'Lithium Ore Nigeria',
    'Tantalite Ore Exporters',
    'Industrial Hardwood Charcoal',
    'Farm-gate Aggregation Nigeria',
    'Commodity Trading Kaduna Nigeria',
  ],
  authors: [{ name: 'BL AGRO INTEGRATED GLOBAL LTD' }],
  creator: 'BL AGRO INTEGRATED GLOBAL LTD',
  publisher: 'BL AGRO INTEGRATED GLOBAL LTD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg' },
    ],
  },
  openGraph: {
    title: 'BL AGRO INTEGRATED GLOBAL LTD | Direct Farm-Gate Agro & Solid Minerals Export',
    description: 'Certified Nigerian agricultural commodities and high-purity solid minerals delivered with reliable international export benchmark compliance.',
    url: 'https://blagrointegrated.com',
    siteName: 'BL AGRO INTEGRATED GLOBAL LTD',
    images: [
      {
        url: '/assets/branding/flier.jpg',
        width: 1200,
        height: 630,
        alt: 'BL AGRO INTEGRATED GLOBAL LTD - Premium Agro Export Services & Solid Minerals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BL AGRO INTEGRATED GLOBAL LTD | Premium Agro & Solid Minerals',
    description: 'Certified Nigerian agro commodities and industrial minerals delivered to international processors worldwide.',
    images: ['/assets/branding/flier.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

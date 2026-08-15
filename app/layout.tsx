import './globals.css';

import { Montserrat } from 'next/font/google';

import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './layout.module.css';

// As duas variaveis mantem os nomes antigos (--font-inter, --font-outfit)
// porque dezenas de arquivos .module.css ja referenciam esses nomes para
// texto de corpo vs. titulos - so trocamos qual fonte carrega em cada uma,
// as duas agora sao Montserrat (pesos diferentes pra manter os mesmos
// font-weight ja usados no resto do app).
const inter = Montserrat({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const outfit = Montserrat({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://blog-do-eliezer.vercel.app'),
  title: 'Blog do Eliezer - Programação Web e Desenvolvimento',
  description:
    'Um blog minimalista e moderno sobre programação web, desenvolvimento de software e tecnologias. Compartilhando ideias, códigos e experiências.',
  keywords: [
    'programação',
    'web',
    'desenvolvimento',
    'javascript',
    'react',
    'next.js',
    'firebase',
    'eliezer',
    'blog',
  ],
  openGraph: {
    title: 'Blog do Eliezer - Programação Web e Desenvolvimento',
    description:
      'Um blog minimalista e moderno sobre programação web, desenvolvimento de software e tecnologias.',
    type: 'website',
    url: 'https://blog-do-eliezer.vercel.app',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog do Eliezer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog do Eliezer - Programação Web e Desenvolvimento',
    description:
      'Um blog minimalista e moderno sobre programação web, desenvolvimento de software e tecnologias.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.variable} ${outfit.variable} ${styles.body}`}>
        <AuthProvider>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
